// validationSchemas.js
import { z } from "zod";

export const userSchema = z.object({
  adAccountId: z.string().min(1, "Ad Account ID is required"),
  tokenId: z.string().min(1, "Token ID is required"),
  adName: z.string().min(1, "Ad Name is required"),
  appSecret: z.string().min(1, "App Secret is required"),
  accountName: z.string().min(1, "Account Name is required"),
});

export const addUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});