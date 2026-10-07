"use server"

import { forgetPassowrdResponseType, userEmailType } from "@/app/forgetPassword/forgetPassword.type"
import { logInSchemaType } from "@/app/login/login.Types"
import { signUpErrorType, signUpResponseType, signUpSchemaType } from "@/app/signup/signUp.Types"
import axios, { isAxiosError } from "axios"
import { cookies } from "next/headers"

export async function useServerSignUp(signUpFormInfo: signUpSchemaType): Promise<signUpResponseType | signUpErrorType> {
  try {
    const resp = await axios.post<signUpResponseType>("https://ecommerce.routemisr.com/api/v1/auth/signup",signUpFormInfo )
   const myCookies= await cookies()
   myCookies.set("Account signup token",resp.data.token,{
    httpOnly:true,
    secure:true,
    sameSite:"strict",
 expires: new Date(Date.now() + 60 * 60 * 24 * 1000)
    
   })
    return resp.data
  }
   catch (error: unknown) {
    if (isAxiosError<signUpErrorType>(error) && error.response?.data) {
      return error.response.data
    }
    // network error, timeout, etc. (shape must match signUpErrorType)
    return { message: "Something went wrong" } as signUpErrorType
  }
}


export async function ServerSignIn(signInFormInfo:logInSchemaType):Promise<signUpResponseType | signUpErrorType>{

  try {
    
     const resp = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",signInFormInfo)
  console.log("resp from sign in fetch",resp)
 const myCookies= await cookies()
 
   myCookies.set("Account signIN token",resp.data.token,{
    httpOnly:true,
    secure:true,
    sameSite:"strict",
 expires: new Date(Date.now() + 60 * 60 * 24 * 1000)
    
   })


 return{
status: resp.status,
      ...resp.data,
    
 }


  } catch (error ) {
    
 if (axios.isAxiosError<signUpErrorType>(error)) {
      console.log(error.response?.data);
      if (error.response?.data) return error.response.data;
    }
    throw error;
  }



}

export async function forgetPasswordServer(userEmail:userEmailType):Promise<forgetPassowrdResponseType>{

  try {
    
  const resp = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",userEmail)
  console.log("resp from forget email",resp)

  
  return {
  
    ...resp.data
  }

  } catch (error) {
       
 if (axios.isAxiosError<signUpErrorType>(error)) {
      console.log(error.response?.data);
      if (error.response?.data) return error.response.data;
    }
    throw error;
  }

}