import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products"
import Home from "../components/layout/Home"
import ProductDetails from "../pages/products/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
      ,
      {
        path:'/products',
        element:<Products/> 
      },
      {
        path:'/products/:id',
        element:<ProductDetails/>
      }
    ]
  },
]);

export default router;
