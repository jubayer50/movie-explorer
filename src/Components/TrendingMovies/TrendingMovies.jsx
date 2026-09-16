import { Star, Play } from "lucide-react";

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
            <div
              key={movie.id}
              className="group overflow-hidden rounded-lg bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10"
            >
              {/* Poster */}
              <div className="relative aspect-2/3 overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/50" />

                {/* Play Button */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-red-600 p-4 text-white transition duration-300 group-hover:scale-100 hover:bg-red-700">
                  <Play className="h-5 w-5 fill-current" />
                </button>

                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-sm text-white">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {movie.rating}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="truncate font-semibold text-white">
                  {movie.title}
                </h3>

                <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
