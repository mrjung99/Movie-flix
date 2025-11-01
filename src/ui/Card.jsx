import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ currMovie }) => {
  const { Poster, imdbID, Title } = currMovie;

  if (!currMovie || currMovie.Response === "False") {
    return (
      <div className="h-lvh flex justify-center items-center">
        <h1 className="text-5xl">No data found 😪</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[200px] bg-white shadow-2xl rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:border hover:border-gray-900 transition-all duration-300 ease-in-out">
      <img src={Poster} alt={Title} className="w-full h-64 object-cover" />
      <NavLink to={`/movies/${imdbID}`}>
        <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 text-sm font-semibold cursor-pointer">
          Watch Now
        </button>
      </NavLink>
    </div>
  );
};

export default Card;
