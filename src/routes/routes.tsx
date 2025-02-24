import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products"
import Home from "../components/layout/Home"
import ProductDetails from "../pages/products/ProductDetails";
import { routesGenerate } from "../utils/routesGenerate";
import { adminPaths } from "./admin.routes";
import Dashboard from "../components/layout/Dashboard";
import About from "../pages/about/About";
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
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  },
 
    {
      path: '/admin',
      element:<Dashboard/>,
      children:routesGenerate(adminPaths)
  },
  
]);

export default router;
