import React from 'react';
import backgroundImg from '../assets/common/elevated-view-hat-eyeglasses.jpg';

function Banner() {
  return (
    <div
      className="py-6 md:py-12 mt-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="justify-start md:w-2/3 mr-7 mt-5">
          <p className="text-gray-600 text-sm md:text-xl mb-2">
            Starting at <span className="font-bold text-black">$999.00</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The best notebook <br/>
            collection 2024
          </h1>
          <p className="text-gray-600 text-sm md:text-xl mb-6 font-['oregano, cursive']">
            Exclusive offer - <span className="text-red-600 font-bold">10%</span> off this week
          </p>
          <a href="#" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
