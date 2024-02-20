/*
WHAT IS KEY PROP?



*/

function WatchList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        // USING KEY PROP FOR RESSETTING THE STATE
        <WatchedMovieList movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}