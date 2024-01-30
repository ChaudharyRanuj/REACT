function Search({ setQuery, query }) {
  // REACT DONT ALLOW TO SELECT ELEMENT MANULLY BUT WANT TO SELECT THEM BY REACT WAY USING REFS

  // THE BELOW CODE IS NOT RIGHT X  X  X  WAY OF SELECTING THE ELEMENT IN REACT
  useEffect(
    function () {
      const ele = document.querySelector(".search");
      ele.focus();
    },
    [query]
  );

  // RIGHT WAY OF SELECTING THE ELEMENT THE REACT WAY

  // STEP 1 (TO DEFINE REF)
  const inputEl = useRef();

  // STEP 3 (USE EFFECT TO SELECT DOM ELEMENT USING DOM API)
  useEffect(
    function () {
      function callBack(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
 // ************** SELECTING DOM ELEMENTS BY USING inputEl.current ref ****************
          inputEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callBack);
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
      // STEP 2 (TO DEFINE REF ATTRIBUTE TO ELEMENT YOU WANT TO SELECT)
      ref={inputEl}
    />
  );
}
