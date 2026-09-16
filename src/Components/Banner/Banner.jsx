const Banner = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-sm font-medium text-red-400">
            <span className="h-2 w-2 rounded-full text-sm bg-red-500" />
            Unlimited Movies & Entertainment
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover Your
            <span className="block text-red-600">Next Favorite Movie</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore thousands of movies from around the world. Discover trending
            releases, timeless classics, and hidden gems all in one place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-5 py-2.5 rounded-md text-white bg-red-600 cursor-pointer hover:bg-red-700 transition-all duration-300">
              Explore Movies
            </button>
            <button className="px-5 py-2.5 rounded-md text-white border border-white/30 bg-white/10 cursor-pointer hover:bg-white/15 transition-all duration-300">
              {" "}
              Browse Trending
            </button>

            {/* <Link
              to="/movies"
              className="rounded-md border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
            ></Link> */}
          </div>

          <div className="mx-auto mt-10 flex justify-center gap-8 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-400">Movies</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-400">Genres</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">100K+</p>
              <p className="text-sm text-gray-400">Movie Lovers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-black to-transparent" />
    </section>
  );
};

export default Banner;
