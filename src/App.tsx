
import MainLayout from "./components/layout/MainLayout";
import { useGetAllProductQuery } from "./redux/features/product/productApi"

function App() {

  const {data} = useGetAllProductQuery(undefined)
  console.log(data);
  
  return (
    <div className=" h-screen">
     <MainLayout/>
    </div>
  )
}

export default App
