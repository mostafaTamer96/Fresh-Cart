import * as z from "zod";



 const phoneRegex =/^01[0125][0-9]{8}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


export const signUpSchema = z.object({
  name: z.string("must be at least 3 chars").nonempty().min(3,"must be at least 3 chars").max(20,"must be at max 2  0 chars"),
    email:z.email("must have an email").nonempty("mail is required"),
password: z
      .string()
      .nonempty("Password is required")
      .regex( passwordRegex,
        "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character"
      ),

    rePassword: z.string().nonempty("Please confirm your password"),

    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(phoneRegex , "must be a valid Egyptian phone number"),
 
}).refine( (data)=> {
  return data.password===data.rePassword
},{path:["rePassword"],error:"password and repassword don't match"}   );




// export  type SignUpDataType = zod.infer<typeof signUpSchema>

