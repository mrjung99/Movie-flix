import { NavLink, useLoaderData } from "react-router-dom";
import Card from "../ui/Card";

const Movies = () => {
  const moviesData = useLoaderData();

  if (!moviesData || moviesData.Response === "False") {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <h1
          className="text-4xl
         font-semibold
          text-gray-700"
        >
          No movies found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="py-8 mt-15 px-4">
      <ul
        className="
          grid 
          grid-cols-1          
          sm:grid-cols-2          
          md:grid-cols-3         
          lg:grid-cols-4          
          xl:grid-cols-5          
          gap-6                  
          place-items-center
         
        "
      >
        {moviesData.Search.map((currMovie) => (
          <Card key={currMovie.imdbID} currMovie={currMovie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
