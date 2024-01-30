import { useEffect } from "react";
import { Children, useState } from "react";

/*
Here is your key: 571f166

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=571f166
*/

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
/*
Here is your key: 571f166

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=571f166
*/

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("test");
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // const [closeMovie, setCloseMovie] = useState(false);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedId(null);
  }

  function handleWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          // SETTING INITIAL LOADING STATE TO TRUE
          setIsLoading(true);
          // SETTING ERROR TO EMPTY STRING WHILE RENDERING AFTER ERROR SHOWING TO HIDE THE ERROR AGAIN AND SHOWING THE INITIAL RENDER DATA

          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=571f166&s=${query}`,
            { signal: controller.signal }
          );
          // HANDLING NETWORK ERROR HANDLING
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies.");
          }

          const data = await res.json();
          // HANDLING API QUERY ERROR HANDLING
          if (data.Response === "False") {
            throw new Error("Movie not found.");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          // CATCHING THE ABORT ERROR MESSAGE
          if (err.name !== "Abort") {
            setError(err.message);
          }
        } finally {
          // used here to prevent duplication this is always run while execution of the code.
          setIsLoading(false);
        }
      }
      // HANDLING SEARCH QUERY LENGTH OR EMPTY STRING INPUT
      if (query.length < 3) {
        setMovies([]);

        setError("");
        return;
      }
      fetchMovie();

      // CLEANING UP THE  DATA FETCHING (HELP DO REDUCE NO OF REQUEST TO SERVER)
      return function () {
        controller.abort();
      };
    },
    // DEPENDENCY ARRAY IS LIKE ADDEVENTLISTENER LISTENING FOR CHANGE IN QUERY STATE VARIABLE.
    [query]
  );

  return (
    <>
      <NavBar>
        <Search setQuery={setQuery} query={query} />
        <NumResult movies={movies} />
      </NavBar>
      <MainMovieBox>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleWatchedMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchList watched={watched} />
            </>
          )}
        </Box>
      </MainMovieBox>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ setQuery, query }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function MainMovieBox({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <>{children}</>}
    </div>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched }) {
  const [movie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userRating, setUserRating] = useState("");
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // FETCHING MOVIE AS PER THE SELECTED ELEMENT ID
  useEffect(
    function () {
      async function getMovieDetails() {
        // SETTING INITIAL LOADING STATE TO TRUE
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=571f166&i=${selectedId}`
        );
        const movieData = await res.json();
        setSelectedMovie(movieData);
        setIsLoading(false);
      }
      // HANDLING SEARCH QUERY LENGTH OR EMPTY STRING
      getMovieDetails();
      // SETTING INITIAL LOADING STATE TO FALSE
    },
    [selectedId]
  );

  // CHANGING THE TITLE OF PAGE AS PER SELECTED MOVIE
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      // CLEAN UP FUNCTION TO (RUN AT EACH RENDER) BEFORE UNMOUNT
      return function () {
        document.title = "usePopcorn";
        console.log(`${title}`);
      };
    },
    [title]
  );

  function handleWatchedAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating"></div>
            <button className="btn-add" onClick={handleWatchedAdd}>
              +Add to Watched List
            </button>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
function WatchedSummary({ watched }) {
  // DERIVED STATES
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieList movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovieList({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
