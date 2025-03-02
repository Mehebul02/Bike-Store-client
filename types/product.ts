// export interface IProduct {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     discountPercentage: number;
//     rating: number;
//     stock: number;
//     tags: string[];
//     brand: string;
//     sku: string;
//     weight: number;
//     // dimensions: Dimensions;
//     warrantyInformation: string;
//     shippingInformation: string;
//     availabilityStatus: string;
//     // reviews: Review[];
//     returnPolicy: string;
//     minimumOrderQuantity: number;
//     // meta: Meta;
//     images: string[];
//     thumbnail: string;
//     quantity?:number
//   }
export interface IProduct {
  _id: string;
  name: string;
  category: string;
  price: number;
  discountPercentage?: number;
  images: string[];
}



  export interface StateType{
    onlineShop:{
      cart:IProduct[];
      favorite:IProduct[];
      userInfo:any
    }
  }