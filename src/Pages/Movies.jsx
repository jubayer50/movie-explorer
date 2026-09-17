import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../Services/get-movies";
import MovieCard from "../Components/MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const movies = await searchMovies(query);

      setMovies(movies);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-100 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-3 border-gray-700 border-t-red-600"></div>

              <p className="text-gray-400">Loading movies...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-black px-6 py-16">
        <div className="flex min-h-100 items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              Something went wrong
            </h2>

            <p className="mt-2 text-gray-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            Explore
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            All Movies
          </h1>

          <p className="mt-3 text-gray-400">
            Discover your next favorite movie from our collection.
          </p>
        </div>

        {/* search form */}
        <form onSubmit={handleSearch} className="mb-10 flex gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            className="flex-1 rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-600"
          />

          <button
            type="submit"
            className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Search
          </button>
        </form>

        {/* Movies */}
        {movies?.length === 0 ? (
          <div className="flex min-h-75 items-center justify-center">
            <p className="text-gray-400">No movies found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;
