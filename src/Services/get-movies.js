export const getMovies = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return data;
};
