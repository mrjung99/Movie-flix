export const getMoviesData = async () => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s="batman"&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
