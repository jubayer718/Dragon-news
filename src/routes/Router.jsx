import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import LatestNews from "../components/LatestNews";
import News from "../Layouts/News";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
      {
        path: "",
        element:<Navigate to={`/category/01`}></Navigate>
    },
      {
        path: "/category/:id",
        element:<CategoryNews></CategoryNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        
      }
    ]
  }, {
    path: "/news",
    element:<News></News>
  }, {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element:<h2>login</h2>
        
      }, {
        path: "/auth/register",
        element:<h2>register</h2>
      }
    ]
  }
])
export default router