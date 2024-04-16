const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_KEY}`,
  },
};

export const fetchMovieDetails = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
  const data = await fetch(url, options);
  return data.json();
};
