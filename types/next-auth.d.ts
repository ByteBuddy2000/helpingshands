import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "user" | "admin" | "super admin"
      username: string
      fullname: string
      status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "BANNED"
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: "user" | "admin" | "super admin"
    username: string
    fullname: string
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "BANNED"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: "user" | "admin" | "super admin"
    username: string
    fullname: string
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "BANNED"
  }
}
