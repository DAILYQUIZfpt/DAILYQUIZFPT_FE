import { z } from "zod";

export const CheckEmailSchema = z.object({
  email: z.string().email(),
});

export const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("This field is required"),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Property email is missing."),
});

export const VerificationSchema = z.object({
  code: z.string(),
});

export const RegisterSchema = z.object({
  username: z.string().optional(),
  email: z.string().email("This field is required"),
  password: z
    .string()
    .min(6, "Password needs a minimum length of 6")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password needs a minimum length of 6")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});
