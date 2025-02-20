
import { baseApi } from "../../api/baseApi";


const productManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProduct:builder.query({
            query:({limit})=>{
               return{
                url: `/products?limit=${limit}`,
                method:"GET",
               }
            }
        })
    })
})


export const {useGetAllProductQuery} = productManagementApi