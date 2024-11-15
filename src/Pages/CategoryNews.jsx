import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
  const {data:News} = useLoaderData()

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      {News.length} News In this category
      
      {
        News.map(singleNews =><NewsCard news={singleNews}></NewsCard>)
      }
    </div>
  );
};

export default CategoryNews;