import * as z from "zod";

export const fortgetPasswordSchema = z.object({
    email:z.email("Email is required").nonempty("mail is required"),

}) 