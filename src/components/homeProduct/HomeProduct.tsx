import { IProduct } from "types/product";
import Container from "../shared/Container";
import Title from "../shared/Title";
import AddToCartButton from '../../pages/products/AddToCart';
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import bg from '../../assets/images/banner/bg1.png'
import { Link } from "react-router-dom";
import Sidebar from "../../pages/products/Sidebar"
const HomeProduct = () => {
    const {data:productData, isFetching} = useGetAllProductQuery({limit:6})
    // const productsToDisplay = productData?.data?.slice(0, 3);
    return (
        <Container className="mt-10">
           <Title className="text-3xl font-semibold font-sans mb-6">Featured Products</Title>
           <div className="divider"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            productData?.data?.map((product:IProduct,indx:number)=>(
                <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
                {/* images  */}
                {/* <Link to={{
                    pathname:`/products/${product?.id}`,
                    query:{id:product?.id}
                }}> <img  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></img> </Lin> */}
               <img  src={bg} alt="productImage" width={500} height={500}  className="w-full h-64 object-contain hover:scale-110 duration-300"></img> 
               {/* sidebar  */}
               <Sidebar/>
                <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 text-xs rounded-md">
                    {/* {product?.discountPercentage} */}
                    77$
                    </p>
               
                {/* description  */}
                <div className="border-t border-gray-200  py-2 px-4 flex flex-col justify-between h-40 font-jost">
                <div>
                <p className="text-md capitalize text-gray-600">{product?.category}</p>
                <h2 className="text-md font-semibold">{product?.name}</h2>
                <h2 className="text-md text-[#28A04D] font-semibold ">${product?.price}</h2>
                {/* <ProductPrice product={product.price}/> */}
                </div>
                {/* <AddToCartButton product={product}/> */}
                <AddToCartButton/>
                </div>
            </div>
            ))
        }
           </div>

          <div className="flex justify-center mt-6">
         <Link to='/products'>
         <button className="cursor-pointer relative overflow-hidden px-6 py-3 text-[17px] font-medium uppercase transition-all duration-500 border rounded bg-transparent text-[#00A97F] border-[#00A97F] z-10 before:content-[''] before:w-[50px] before:h-[50px] before:bg-[#00A97F] before:rounded-full before:absolute before:top-[-1em] before:left-[-1em] before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#00A97F] after:rounded-full after:absolute after:left-[calc(100%+1em)] after:top-[calc(100%+1em)] after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-1000 after:ease-in-out after:z-[-1] hover:text-white hover:before:w-[410px] hover:before:h-[410px] hover:after:w-[410px] hover:after:h-[410px] active:brightness-90">
  See All
</button>
</Link>

          </div>
          
        </Container>
    );
};

export default HomeProduct;