import TrendiesMovieCard from "../TrendiesMovieCard/TrendiesMovieCard";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Action",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Avengers",
    year: 2012,
    rating: 8.0,
    genre: "Adventure",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
];

const TrendingMovies = () => {
  return (
    <section className="bg-black px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              What's Trending
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Trending Movies
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Discover the movies everyone is watching right now.
            </p>
          </div>

          <button className="hidden text-sm font-medium text-red-500 transition hover:text-red-400 sm:block">
            View All →
          </button>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <TrendiesMovieCard key={movie.id} movie={movie}></TrendiesMovieCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
