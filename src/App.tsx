import Banner from "./components/Banner/Banner";
import Header from "./components/header/Header";
import { useGetAllProductQuery } from "./redux/features/product/productApi"

function App() {


  const {data} = useGetAllProductQuery(undefined)
  console.log(data);
  
  return (
    <div className=" h-screen">
     
   <Header/>
   <Banner/>
    </div>
  )
}

export default App
