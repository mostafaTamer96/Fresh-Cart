
import { AllBrands, Category, categoryType, productType } from "@/Types/Products.Types";



export async function getAllProducts(): Promise<productType[] | null> {
  try {
    const resp = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products",
      {
        cache: "force-cache",
      },
    );
    const finalResp = await resp.json();
    console.log("Products finalResp", finalResp.data);

    return finalResp.data;
  } catch (error) {
    console.log("error from getAllProducts", error);
    return null;
  }
}

export async function getSpecificProduct(
  id: string,
): Promise<productType | null> {
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    const finalResp = await resp.json();
    console.log("finalResp getSpecificProduct", finalResp.data);
    return finalResp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllCategories(): Promise<categoryType[] | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const finalRes = await res.json();
    console.log("finalRes from categories", finalRes.data);
    return finalRes.data;
  } catch (error) {
    console.log("error from categories ", error);
    return null;
  }
}


export async function getAllBrands(): Promise<AllBrands[] | undefined> {
    try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
            cache: "force-cache"
        })

        const finalResponse = await response.json()

        return finalResponse.data

    } catch (error) {
        console.log(error)
        return undefined

    }


}

export async function getCategories(): Promise<Category[] | null> {
    try {

        const response = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
            cache: "force-cache",
        })
        const finalResponse = await response.json()
        return finalResponse.data


    } catch (error) {
        console.log(error)
        return null


    }
}



export async function getCategoryById(id: string): Promise<Category | undefined> {

    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`, {
            cache: "force-cache"
        })
        const finalResponse = await response.json()
        console.log("final resp in categoryId is ", finalResponse)

        return finalResponse.data

    } catch (error) {
        console.log("error fro categoryID",error)
        return undefined


    }

}


export async function getAllSubCategories(): Promise<AllSubCategories[] | undefined> {
    try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/subcategories", {
            cache: "force-cache"
        })

        const finalResponse = await response.json()

        return finalResponse.data

    } catch (error) {
        console.log(error)
        return undefined

    }


}