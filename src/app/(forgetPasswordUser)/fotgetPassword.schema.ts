import * as z from "zod";

export const fortgetPasswordSchema = z.object({
    email:z.email("Email is required").nonempty("mail is required"),

}) 


export const verificationCode = z.object({
  resetCode:  z.string().min(1, "Reset code is required").length(6, "Code must be 6 digits")
,
});
export type verificationCodeType = z.infer<typeof verificationCode>;





export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });