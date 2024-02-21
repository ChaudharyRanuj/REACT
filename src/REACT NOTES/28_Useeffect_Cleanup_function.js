// ******************************** EXAMPLE 1: CLEANING UP DATA FETCHING *****************
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
        // used here to prevent duplication of code this is always run while execution of the code.
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
// ************************************ DATA FETCHING CLEANING UP FUNCTION *************************
// NOTE: RUNS BEFORE UNMOUNT
    // CLEANING UP THE  DATA FETCHING (HELP DO REDUCE NO OF REQUEST TO SERVER)
    return function () {
      controller.abort();
    };
  },
  // DEPENDENCY ARRAY IS LIKE ADDEVENTLISTENER LISTENING FOR CHANGE IN QUERY STATE VARIABLE.
  [query]
);


// ******************************** EXAMPLE 2: CLEANING UP OF TITLE OF PAGE *****************
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

