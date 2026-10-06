"use server"

import { signUpErrorType, signUpResponseType, signUpSchemaType } from "@/app/signup/signUp.Types"
import axios, { isAxiosError } from "axios"

export async function useServerSignUp(signUpFormInfo: signUpSchemaType): Promise<signUpResponseType | signUpErrorType> {
  try {
    const resp = await axios.post<signUpResponseType>("https://ecommerce.routemisr.com/api/v1/auth/signup",
signUpFormInfo
    )
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