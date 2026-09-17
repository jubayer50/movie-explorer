import { Star, X } from "lucide-react";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Movie Card */}
      <div className="group overflow-hidden rounded-xl bg-zinc-900 border border-white/10">
        {/* Image */}
        <div className="relative aspect-2/3 overflow-hidden">
          <img
            src={movie.image?.medium}
            alt={movie.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-sm text-white">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {movie.rating?.average || "N/A"}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="truncate text-lg font-semibold text-white">
            {movie.name}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {movie.genres?.slice(0, 2).join(" • ")}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {movie.status} • {movie.premiered?.slice(0, 4)}
          </p>

          {/* Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 w-full rounded-md bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            See Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-zinc-900"
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Picture */}
              <img
                src={movie.image?.original || movie.image?.medium}
                alt={movie.name}
                className="h-80 w-full object-cover sm:h-auto sm:w-2/5"
              />

              {/* Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">{movie.name}</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full bg-red-600/10 px-3 py-1 text-xs text-red-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  <p>
                    <span className="text-white">Rating:</span> ⭐{" "}
                    {movie.rating?.average || "N/A"}
                  </p>

                  <p>
                    <span className="text-white">Language:</span>{" "}
                    {movie.language || "N/A"}
                  </p>

                  <p>
                    <span className="text-white">Runtime:</span>{" "}
                    {movie.runtime || "N/A"} min
                  </p>

                  <p>
                    <span className="text-white">Status:</span> {movie.status}
                  </p>
                </div>

                {/* Short Summary */}
                <p
                  className="mt-5 line-clamp-4 text-sm leading-6 text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary || "No description available.",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
