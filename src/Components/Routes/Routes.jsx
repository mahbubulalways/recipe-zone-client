import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Blog from "../Blog/Blog";
import Register from "../Register/Register";
import ChefRecipes from "../ChefRecipes/ChefRecipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../UserProfile/UserProfile";
import Order from "../ExtraSection/Order";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader:async()=>{
                const carouselData=await(await fetch('https://recipe-zone-server-mahbubulalways.vercel.app/carousel')).json()
                const chefs=await(await fetch('https://recipe-zone-server-mahbubulalways.vercel.app/chefs')).json()

                return {carouselData,chefs}
            }
        },
        {
            path: "/chef-recipes/:id",
            element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
            loader:({params})=>fetch(`https://recipe-zone-server-mahbubulalways.vercel.app/chefs/${params.id}`)
        },
        {
            path: "/login",
      element:<Login></Login>,
        },
        {
            path: "/register",
      element:<Register></Register>,
        },
        {
            path: "/blog",
            element:<Blog></Blog>,
        },
        {
            path: "/profile",
            element:<UserProfile></UserProfile>,
        },
        {
            path: "/order",
            element:<PrivateRoute><Order></Order></PrivateRoute>,
        },
      ]
    },
  ]);

export default router