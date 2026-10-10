import { signUpSchemaType } from "@/app/signup/signUp.Types";
import {
  forgetPasswordServer,
  ServerSignIn,
  useServerSignUp,
} from "./Auth.services.Server";
import { logInSchemaType } from "@/app/login/login.Types";
import {
  forgetPassowrdResponseType,
  userEmailType,

  verifyCodeType,

  verifyCodeTypeAccept,
} from "@/app/(forgetPasswordUser)/forgetPassword.type";
import axios from "axios";

export async function postSignUp(signUpFormInfo: signUpSchemaType) {
  const resp = await useServerSignUp(signUpFormInfo);
  console.log("resp from user server", resp);

  if (resp.message === "success") {
    return resp;
  } else {
    return resp;
  }
}

export async function postSignIn(signInFormInfo: logInSchemaType) {
  const resp = await ServerSignIn(signInFormInfo);
  console.log("resp from  postSignIn in atuh", resp);

  if (resp.status === 200) {
    console.log("i am authorized");

    return resp;
  } else {
    console.log("i am not authorized");
    return resp;
  }
}

export async function postForgetPassword(userEmail: userEmailType) {
  const resp = await forgetPasswordServer(userEmail);
  console.log("postForgetPassword", resp);

  if (resp.statusMsg === "success") {
    console.log("asfsa", resp.message);
    return resp;
  } else {
    return resp;
  }
}

export async function postVerificationCode(
  verifiedCode: verifyCodeType
): Promise<verifyCodeTypeAccept | forgetPassowrdResponseType> {
  try {
    const resp = await axios.post<verifyCodeTypeAccept>(
      "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      verifiedCode
    );
    console.log("res from postVerificationCode", resp.data);
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError<forgetPassowrdResponseType>(error)) {
      console.log(error.response?.data);
      if (error.response?.data) return error.response.data;
      return { statusMsg: "fail", message: error.message };
    }
    return { statusMsg: "fail", message: "Something went wrong" };
  }
}
