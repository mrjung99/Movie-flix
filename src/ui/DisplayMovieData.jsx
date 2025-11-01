import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const DisplayMovieData = () => {
  const movieData = useLoaderData();

  if (!movieData || movieData.Response === "False") {
    return (
      <div className="h-lvh flex justify-center items-center">
        <h1 className="text-5xl">No data found 😪</h1>
      </div>
    );
  }
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Title,
    Runtime,
    Released,
    imdbRating,
    Writer,
  } = movieData;

  let starColor = "";
  if (imdbRating >= 8) starColor = "text-green-700";
  else if (imdbRating >= 7) starColor = "text-blue-500";
  else if (imdbRating >= 6) starColor = "text-yellow-400";
  else if (imdbRating >= 5) starColor = "text-orange-500";
  else starColor = "text-red-400";

  return (
    <div className="p-3 mt-17 md:mb-8 md:px-5">
      <h1 className="text-5xl font-semibold text-gray-800 mb-6">
        {Title}{" "}
        <span className="text-3xl">
          {imdbRating}
          <span className={`${starColor} text-lg`}>★</span>
        </span>
      </h1>
      <div className="flex flex-col md:flex-row md:items-start md:gap-6  md:justify-around items-center">
        <div className="flex gap-3 my-3 flex-col">
          <img src={Poster} alt="" />
          <button className="text-white bg-blue-700 rounded-md py-1.5 px-5 cursor-pointer hover:bg-blue-600">
            Watch Now
          </button>
          <NavLink to="/movies" className="w-full">
            <button className="text-white w-full bg-orange-800 rounded-md px-5 py-1.5 cursor-pointer hover:bg-red-700">
              Go Back
            </button>
          </NavLink>
        </div>
        <div className="">
          <h3 className="mt-2">
            <span className="text-lg font-semibold">Actors:</span> {Actors}
          </h3>
          <p>
            <span className="text-lg font-semibold">Director:</span> {Director}
          </p>
          <p>
            <span className="text-lg font-semibold">Writer:</span> {Writer}
          </p>
          <p>
            <span className="text-lg font-semibold">Genre:</span> {Genre}
          </p>
          <p>
            <span className="text-lg font-semibold">Awards:</span> {Awards}
          </p>
          <p>
            <span className="text-lg font-semibold">
              Box office collection:
            </span>{" "}
            {BoxOffice}
          </p>
          <p>
            <span className="text-lg font-semibold">Country:</span> {Country}
          </p>
          <p>
            <span className="text-lg font-semibold">Language:</span> {Language}
          </p>
          <p>
            <span className="text-lg font-semibold">Released Dated:</span>{" "}
            {Released}
          </p>
          <p>
            <span className="text-xl font-semibold">Runtime:</span> {Runtime}
          </p>
          <p className="my-3">{Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovieData;
