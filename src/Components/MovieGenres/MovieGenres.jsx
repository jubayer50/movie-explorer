import {
  Drama,
  Laugh,
  Rocket,
  Skull,
  Heart,
  Swords,
  Ghost,
  Clapperboard,
} from "lucide-react";

const genres = [
  {
    id: 1,
    name: "Action",
    icon: Swords,
    movies: "1,240 Movies",
  },
  {
    id: 2,
    name: "Comedy",
    icon: Laugh,
    movies: "850 Movies",
  },
  {
    id: 3,
    name: "Drama",
    icon: Drama,
    movies: "1,560 Movies",
  },
  {
    id: 4,
    name: "Sci-Fi",
    icon: Rocket,
    movies: "620 Movies",
  },
  {
    id: 5,
    name: "Horror",
    icon: Skull,
    movies: "740 Movies",
  },
  {
    id: 6,
    name: "Romance",
    icon: Heart,
    movies: "920 Movies",
  },
  {
    id: 7,
    name: "Thriller",
    icon: Ghost,
    movies: "680 Movies",
  },
  {
    id: 8,
    name: "Adventure",
    icon: Clapperboard,
    movies: "530 Movies",
  },
];

const MovieGenres = () => {
  return (
    <section className="bg-zinc-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            Explore Categories
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Browse Movies by Genre
          </h2>

          <p className="mt-3 text-gray-400">
            Find something you'll love by exploring your favorite genres.
          </p>
        </div>

        {/* Genres */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {genres.map((genre) => {
            const Icon = genre.icon;

            return (
              <button
                key={genre.id}
                className="group rounded-xl border border-white/10 bg-black/90 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-black/75"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-500 transition duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {genre.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500 transition group-hover:text-red-100">
                  {genre.movies}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MovieGenres;
