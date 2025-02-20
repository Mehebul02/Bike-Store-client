import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products"
import Home from "../components/layout/Home"
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
        
      }
    ]
  },
]);

export default router;
