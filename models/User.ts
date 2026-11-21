import mongoose, { type Model, type Schema, type Types } from "mongoose"

export type UserRole = "user" | "admin" | "super admin"
export type UserStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED" | "BANNED"

export interface IUser extends mongoose.Document {
  _id: Types.ObjectId
  fullname: string
  username: string
  email: string
  passwordHash: string
  role: UserRole
  status: UserStatus
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "SUSPENDED", "BANNED"],
      default: "INACTIVE",
    },
  },
  { timestamps: true }
)

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema)
