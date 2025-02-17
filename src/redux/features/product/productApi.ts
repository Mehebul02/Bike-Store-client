
import { baseApi } from "../../api/baseApi";


const productManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProduct:builder.query({
            query:()=>{
               return{
                url:'/products',
                method:"GET",
               
               }
            }
        })
    })
})


export const {useGetAllProductQuery} = productManagementApi