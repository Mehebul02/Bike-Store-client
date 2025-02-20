
import bg from '../../assets/images/banner/bg1.png'
import ProductPrice from "./ProductPrice";

const ProductCard = () => {
    return (
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
            {/* images  */}
            {/* <Link to={{
                pathname:`/products/${product?.id}`,
                query:{id:product?.id}
            }}> <img  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></img> </Lin> */}
           <img  src={bg} alt="productImage" width={500} height={500}  className="w-full h-64 object-contain hover:scale-110 duration-300"></img> 
           {/* sidebar  */}
           {/* <Sideba product ={bg}/> */}
            <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 text-xs rounded-md">
                {/* {product?.discountPercentage} */}
                77$
                </p>
           
            {/* description  */}
            <div className="border-t border-gray-200  py-2 px-4 flex flex-col justify-between h-40 font-jost">
            <div>
            <p className="text-md capitalize text-gray-600">product?.category</p>
            <h2 className="text-md font-semibold">Product tile</h2>
            <ProductPrice product={"5cxxcv"}/>
            </div>
            {/* <AddToCartButton product={product}/> */}
            <button>Add To Cart</button>
            </div>
        </div>
            <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
            {/* images  */}
            {/* <Link to={{
                pathname:`/products/${product?.id}`,
                query:{id:product?.id}
            }}> <img  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></img> </Lin> */}
           <img  src={bg} alt="productImage" width={500} height={500}  className="w-full h-64 object-contain hover:scale-110 duration-300"></img> 
           {/* sidebar  */}
           {/* <Sideba product ={bg}/> */}
            <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 text-xs rounded-md">
                {/* {product?.discountPercentage} */}
                77$
                </p>
           
            {/* description  */}
            <div className="border-t border-gray-200  py-2 px-4 flex flex-col justify-between h-40 font-jost">
            <div>
            <p className="text-md capitalize text-gray-600">product?.category</p>
            <h2 className="text-md font-semibold">Product tile</h2>
            <ProductPrice product={"5cxxcv"}/>
            </div>
            {/* <AddToCartButton product={product}/> */}
            <button>Add To Cart</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;