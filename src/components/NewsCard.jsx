import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
  const {news}=props||{}
  const { title, author, published_date,image_url, thumbnail_url, rating, total_view, details } = news;

  // Function to render stars based on the rating number
  const renderStars = (ratingNumber) => {
    const stars = [];
    const fullStars = Math.floor(ratingNumber);  // Number of full stars
    const hasHalfStar = ratingNumber % 1 >= 0.5;  // Whether there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);  // Remaining empty stars

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Thumbnail Image */}
      <div className="relative">
        <img
          src={image_url}
          alt="Thumbnail"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {details.slice(0, 120)}...
          <Link to={`/news/${news._id}`} className="text-red-500 font-semibold cursor-pointer"> Read More</Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between p-4 border-t text-gray-600">
        {/* Rating */}
        <div className="flex items-center">
          {renderStars(rating.number)}
          <span className="ml-2 text-sm font-semibold">
            {rating.number} ({rating.badge})
          </span>
        </div>
        {/* Views */}
        <div className="flex items-center">
          <FaEye />
          <span className="ml-1 text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
