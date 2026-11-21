// auth.ts
import bcrypt from "bcryptjs"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "@/lib/connectToDB"
import { User } from "@/models/User"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        await connectToDB()

        const identifier = credentials.email.toLowerCase().trim()

        const user = await User.findOne({
          $or: [{ email: identifier }, { username: identifier }],
        }).select("+passwordHash")

        if (!user) return null

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        )

        if (!passwordMatch) return null

        if (user.status !== "ACTIVE") {
          throw new Error("ACCOUNT_INACTIVE")
        }

        return {
          id: user._id.toString(),
          name: user.fullname,
          email: user.email,
          role: user.role,
          username: user.username,
          fullname: user.fullname,
          status: user.status,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.name = user.fullname
        token.username = user.username
        token.email = user.email
        token.fullname = user.fullname
        token.status = user.status
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.username = token.username as string
        session.user.fullname = token.fullname as string
        session.user.status = token.status
      }

      return session
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
}
