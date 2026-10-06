
import {   signUpErrorType, signUpResponseType, signUpSchemaType } from './../app/signup/signUp.Types';
import { categoryType, productType } from "@/Types/Products.Types"
import axios from "axios";
import { useServerSignUp } from './Auth.services';
import { toast } from 'sonner';


 export  async function getAllProducts(): Promise<productType[]|null >{
    try {    
 const resp = await fetch("https://ecommerce.routemisr.com/api/v1/products",{
  cache:"force-cache",
  
  
 } )
const finalResp= await resp.json()
console.log("Products finalResp",finalResp.data)

return finalResp.data 
    } catch (error) {
      console.log("error from getAllProducts",error)
      return null
     
    }

  }


   export  async function getSpecificProduct(id:string):Promise<productType|null>{
    try {  
   const resp= await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
const finalResp = await resp.json()
console.log("finalResp getSpecificProduct",finalResp.data)
return finalResp.data

    } catch (error) {
      console.log(error)
      return null
    }

   }


   export async function getAllCategories():Promise <categoryType[]|null> {
  try {
    const res= await  fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
  const finalRes= await res.json()
  console.log("finalRes from categories",finalRes.data)
  return finalRes.data
  
  } catch (error) {
    console.log("error from categories ",error)
    return null
  }
   }




export async function postSignUp(signUpFormInfo:signUpSchemaType){

const resp = await useServerSignUp(signUpFormInfo)   
console.log("resp from user server",resp)

if (resp.message === "success") {

  toast.success(resp.message, {
     position: "top-right",
    richColors:true,
    duration: 3000  // 3 seconds
  })
} 

else {
  toast.error(resp.message, { 
    position: "top-right",
  richColors:true,

 })
}
  // console.log("finally here",resp.data)
//  return resp.data
   
return resp
}