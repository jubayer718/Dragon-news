import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../components/Header';
import RightNav from '../../components/RightNav';
import FindUs from '../../components/FindUs';

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  // console.log(news)
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className='w-11/12 mx-auto grid gap-5 grid-cols-12 py-3'>
        <section className='col-span-9'>
        <h2 className='font-semibold mb-3'>Dragon News</h2>

          
          <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
              <h2 className="card-title">{ news?.title}</h2>
              <p>{ news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn btn-error text-white">Back to News Category</Link>
    </div>
  </div>
</div>

        </section>
        <aside className='col-span-3'><RightNav></RightNav>
        <FindUs></FindUs>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;