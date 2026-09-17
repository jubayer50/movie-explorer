export const getMovies = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return data;
};

// for search api
export const searchMovies = async (query) => {
  const res = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
  );

  if (!res.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await res.json();

  return data.map((item) => item.show);
};
