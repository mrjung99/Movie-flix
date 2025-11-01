import React from "react";

const Home = () => {
  return (
    <div className="h-[90vh] flex flex-col gap-15 mt-18 md:mt-13 md:gap-0 lg:flex-row md:justify-around items-center px-3">
      <div className="max-w-xl">
        <p className="uppercase md:text-sm text-gray-800">
          Explore the latest in movie industries
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Unlimited Movies, TVs Shows & More
        </h1>
        <p className="text-sm  text-gray-900">
          Discover the top best movies and dramas with a catchy subtitle like
          ultimate guide to must-watch content
        </p>
      </div>
      <img
        src="/8852084.jpg"
        alt="main images"
        className="h-[50vh] lg:h-[400px] lg:w-[400px]"
      />
    </div>
  );
};

export default Home;
