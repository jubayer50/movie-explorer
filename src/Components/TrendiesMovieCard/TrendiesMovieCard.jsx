import { Star, Play } from "lucide-react";

const TrendiesMovieCard = ({ movie }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10">
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
        <h3 className="truncate font-semibold text-white">{movie.title}</h3>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendiesMovieCard;
