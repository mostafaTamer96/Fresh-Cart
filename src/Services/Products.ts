import { productType } from "@/Types/Products.Types"

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