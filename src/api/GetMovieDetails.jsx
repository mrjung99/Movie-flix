const getMovieDetails = async ({ params }) => {
  const id = params.movieID;
  try {
    const data = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieDetails;
