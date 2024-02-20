
import { useEffect, useState } from "react";


// CUSTOM HOOK 
// 1) useKey 
export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key]
  );
}

// 2) useLocalStorageState 
export function useLocalStorageState(initialState, key) {

  const [value, setValue] = useState(function () {
    const storedMovie = localStorage.getItem(key);
    return storedMovie ? JSON.parse(storedMovie) :initialState ;
  });
  
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  

return [value, setValue];

}

// 3) useMovie 

// CUSTOM HOOK useMovie : use in used as prefix in front of function and 
// must return array or object
// NOTE: CUSTOM HOOK IS NEED TO HAVE ATLEAST ONE REACT HOOK
export function useMovie(query, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  
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
          console.log(err.message);
          console.log(err.name);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          // used here to prevent duplication this is always run while execution of the code.
          // ALWAYS RUN IF ERROR THROWN OR ON NORMAL EXECUTION
          setIsLoading(false);
        }
      }
      // HANDLING SEARCH QUERY LENGTH OR EMPTY STRING INPUT
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // CLOSES THE OPEN MOVIE IN LEFT BOX JUST BEFORE NEXT QUERY
      callback();
      fetchMovie();

      // CLEANING UP THE  DATA FETCHING (HELP DO REDUCE NUMBER OF REQUEST TO SERVER)
      return function () {
        controller.abort();
      };
    },
    // DEPENDENCY ARRAY IS LIKE ADDEVENTLISTENER LISTENING FOR CHANGE IN QUERY STATE VARIABLE.
    [query]
  );
  return {isLoading, movies, error}
}




