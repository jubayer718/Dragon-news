import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import LatestNews from "../components/LatestNews";
import News from "../Layouts/News";
import CategoryNews from "../Pages/CategoryNews";

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
  }
])
export default router