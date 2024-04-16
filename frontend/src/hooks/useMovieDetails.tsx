import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../services/movieDBAPI";

const useMovieDetails = (movieId: number) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });

export default useMovieDetails;
