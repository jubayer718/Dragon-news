import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div>
      <div className='flex items-center gap-2 bg-gray-200 p-2 '>
        <p className='bg-[#D72050] px-4 py-3 text-white'>latest</p>
        <Marquee pauseOnHover={true} speed={60} className='px-10 '>
          <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facilis mollitia maxime commodi cum molestiae at libero aliquam laudantium rerum sint veritatis esse, labore quo eum modi error alias voluptas.</Link>
          <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facilis mollitia maxime commodi cum molestiae at libero aliquam laudantium rerum sint veritatis esse, labore quo eum modi error alias voluptas.</Link>
          <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facilis mollitia maxime commodi cum molestiae at libero aliquam laudantium rerum sint veritatis esse, labore quo eum modi error alias voluptas.</Link>
       </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;