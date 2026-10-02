export  interface productType{
  images:string[],
  sold:number,
  ratingsQuantity:number,
  id:string,
  price:number,
  quantity:string,
  description:string
  slug:string,
  title:string
  name:string
  category:categoryType,
  brand:brandType,
  ratingsAverage:number,
  imageCover:string,
  priceAfterDiscount?:number,
reviews:productReviewsType[]
}

export interface productReviewsType{
updatedAt:string,
createdAt:string,
product:string,
rating:number,
review:string
id:string
user:userType
}
export interface userType{
  id:string,
  name:string
}

export  interface categoryType{
  _id:string,
   name:string,
   slug:string,
   image:string

}
export interface brandType{
   _id:string,
   name:string,
   slug:string,
   image:string
}