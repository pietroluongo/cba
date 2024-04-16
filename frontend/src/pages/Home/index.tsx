import useMovieDetails from "../../hooks/useMovieDetails";
import Calendar from "./Calendar";

const Homepage = () => {
  const movieDetails = useMovieDetails(238);

  return (
    <div className="flex flex-col">
      <div
        className="w-screen h-screen bg-fixed flex flex-col items-center justify-center bg-no-repeat bg-cover bg-blend-darken bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.data?.backdrop_path})`,
          backgroundColor: "rgb(0,0,0,0.7)",
        }}
      >
        <div className="font-sans font-extrabold text-7xl w-fit p-10 drop-shadow-2xl h-full flex items-center">
          {movieDetails.data?.title}
        </div>
        <div className="font-serif text-2xl w-[80%] text-white mt-10 p-10 text-center drop-shadow-2xl h-full">
          <span>
            {movieDetails.data?.overview.split(".").slice(0, 3).join(".")}.
          </span>
        </div>
        <div className="font-serif text-2xl text-white drop-shadow-2xl mt-10 p-10 flex flex-col justify-center text-center">
          <p>Próxima sessão</p>
          <p>16/04/2024</p>
          <p>22h</p>
        </div>
      </div>
      <div className="p-10 bg-white">
        <Calendar />
      </div>
    </div>
  );
};

export default Homepage;
