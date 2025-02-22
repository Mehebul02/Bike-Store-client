import { useGetSingleProductQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams()
    const {data:product, isLoading} = useGetSingleProductQuery(id)
    console.log(product);

    if(isLoading){
        return <h1 className="flex justify-between items-center"> Loading.....</h1>
    }
   
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;