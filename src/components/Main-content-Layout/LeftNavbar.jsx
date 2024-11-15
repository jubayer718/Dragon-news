import { captureStackTrace } from 'postcss/lib/css-syntax-error';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [category, setCategory] = useState([]);
  console.log(category)
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
   .then(data=>setCategory(data.data.news_category
)) 
  }, [])
  
  return (
    <div>
      <h2 className='font-semibold'> All category({ category.length})</h2>
      <div className='flex flex-col gap-1 pt-5'>
        {category.map(category => (<NavLink to={`/category/${category.category_id}`} key={category.category_id} className={({isActive})=>`btn ${isActive?'bg-[#E7E7E7]':'bg-base-100'}`}>{ category.category_name}</NavLink>))}
      </div>
    </div>
  );
};

export default LeftNavbar;