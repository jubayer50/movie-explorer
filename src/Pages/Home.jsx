import Banner from "../Components/Banner/Banner";
import MovieGenres from "../Components/MovieGenres/MovieGenres";
import TrendingMovies from "../Components/TrendingMovies/TrendingMovies";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <TrendingMovies></TrendingMovies>

      <MovieGenres></MovieGenres>
    </div>
  );
};

export default Home;
