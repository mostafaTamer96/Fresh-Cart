import * as z from "zod";

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const signInSchema = z.object({
    email:z.email("must have an email").nonempty("mail is required"),
password: z
      .string()
      .nonempty("Password is required")
      .regex( passwordRegex,
        "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character"
      ),


}) 