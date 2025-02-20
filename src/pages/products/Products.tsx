import { IProduct } from "types/product";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";
import Container from "../../components/shared/Container"
import logo from "../../assets/images/logo/logo.webp"
const Products = () => {
    const {data:productData, isFetching} = useGetAllProductQuery({limit:9})
  
    if (isFetching) {
        return <div className="flex justify-center items-center h-screen">
            <img className="w-40" src={logo} alt="" />
        </div>;
    }

    return (
        <Container className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        
        {
            productData?.data?.map((product:IProduct,indx:number)=>(<ProductCard key={indx} product={product}/>))
        }
    </div>
        </Container>
        
    );
};

export default Products;