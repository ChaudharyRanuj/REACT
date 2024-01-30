// NAME IMPORT
import { useEffect, useRef } from "react";
// NAME IMPORT
import { Children, useState } from "react";
// NAME IMPORT
import { useMovie } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";
/*
Here is your key: 571f166

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=571f166
*/

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("test");
  // this useMovie is CUSTOM HOOK
  // USE TO REMOVE THE NON-UI LOGIC CODE TO SEPERATE FILES
  // NOTE: handleCloseMovie is function so hoisted at
  const { isLoading, movies, error } = useMovie(query, handleCloseMovie);

  const [selectedId, setSelectedId] = useState(null);
  //FUNCTION INSIDE STATE WILL RUN ONLY ON INITIAL RENDER
         
  const [watched, setWatched]  = useLocalStorageState([], 'watched')

  // const [watched, setWatched] = useState(function () {
  //   const storedMovie = localStorage.getItem("watched");
  //   return storedMovie ? JSON.parse(storedMovie) : [];
  // });

  // function () {
  //   const storedMovie = localStorage.getItem("watched");
  //   return JSON.parse(storedMovie);
  // }
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => [...watched].filter((ele) => ele.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
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
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchList watched={watched} onDeleteMovie={handleDeleteMovie} />
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
  // USING REFS

  const inputEl = useRef();

  useEffect(
    function () {
      function callBack(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function MainMovieBox({ children }) {
  return <main className="main">{children}</main>;
}

// MAKING OF REUSABEL COMPONENT
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

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((ele) => ele.imdbID);

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

    onAddWatched(newWatchedMovie, selectedId);

    onCloseMovie();
  }

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
      };
    },
    [title]
  );

  useEffect(
    function () {
      function callBack(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [onCloseMovie]
  );

  const isIncluded = watched.map((ele) => ele.imdbID).includes(selectedId);
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
            {isIncluded && (
              <div className="rating">
                {" "}
                <p>
                  <b>This movie is already added to list.</b>
                </p>
              </div>
            )}
            {!isIncluded && (
              <button className="btn-add" onClick={handleWatchedAdd}>
                +Add to Watched List
              </button>
            )}
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

function WatchList({ watched, onDeleteMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieList
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}

function WatchedMovieList({ movie, onDeleteMovie }) {
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
      <button
        className="btn-delete"
        onClick={() => onDeleteMovie(movie.imdbID)}
      >
        ❌
      </button>
    </li>
  );
}
