// validationSchemas.js
import { z } from 'zod';

export const userSchema = z.object({
  adAccountId: z.string().min(1, "Ad Account ID is required"),
  tokenId: z.string().min(1, "Token ID is required"),
  adName: z.string().min(1, "Ad Name is required"),
  appSecret: z.string().min(1, "App Secret is required"),
  accountName: z.string().min(1, "Account Name is required"),
});
