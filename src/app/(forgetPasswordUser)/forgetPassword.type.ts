import { fortgetPasswordSchema, resetPasswordSchema } from "./fotgetPassword.schema";
   import { z } from "zod"; 
export type userEmailType = z.infer<typeof fortgetPasswordSchema>;


export interface forgetPassowrdResponseType{
        statusMsg:string,
    message:string,
  
}


export interface verifyCodeTypeAccept {
  status: string;
}

export interface verifyCodeTypeAccept{
    status:string
}
export interface verifyCodeType {
  resetCode: string;
}



export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
