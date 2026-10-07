import { signUpSchemaType } from "@/app/signup/signUp.Types"
import { forgetPasswordServer, ServerSignIn, useServerSignUp } from "./Auth.services"
import { logInSchemaType } from "@/app/login/login.Types"
import { userEmailType } from "@/app/forgetPassword/forgetPassword.type"

export async function postSignUp(signUpFormInfo:signUpSchemaType){

const resp = await useServerSignUp(signUpFormInfo)   
console.log("resp from user server",resp)

if (resp.message === "success") {

  return resp
} 

else {
  return resp
}
   
}





export async function postSignIn(signInFormInfo:logInSchemaType){

 
const resp= await ServerSignIn(signInFormInfo)
console.log("resp from  postSignIn in atuh",resp)
     

if(resp.status===200 ){
   console.log("i am authorized")

return resp

}

else{
     console.log("i am not authorized")
     return resp


}



  
  


 

}


export async function postForgetPassword(userEmail:userEmailType){
  const resp = await forgetPasswordServer(userEmail)
  console.log("postForgetPassword",resp)
  
  if(resp.statusMsg==="success"){
    console.log("asfsa",resp.message)
   return resp
  }

  else {
    return resp
  }

} 