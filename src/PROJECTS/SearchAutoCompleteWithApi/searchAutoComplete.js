import { useEffect, useRef, useState } from "react";
import { Suggestion } from "./Suggestion";
const SearchAutoComplete = function ({ url }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);
  const inputElement = useRef(null);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 0) {
      setFilteredUser(user.filter((item) => item.includes(query)));
    } else {
      setFilteredUser([]);
    }
  }

  function handleClick(e) {
    const value = e.target.innerText;
    setSearchParams(value);
    setFilteredUser(user.filter((item) => item.includes(value)));
    inputElement.current.focus();
  }

  async function fetchUsers(url) {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Problem fetching data");
      }
      const data = await res.json();
      const users = data.users;
      if (data) {
        setUser(users.map((item) => item.firstName.toLowerCase()));
        setLoading(false);
      }
    } catch (err) {
      setErrorMessage(err);
      setLoading(false);
    }
  }

  useEffect(
    function () {
      fetchUsers(url);
    },
    [url]
  );

  if (errorMessage) return <h1>Error Fetching the user{errorMessage}</h1>;

  return (
    <div className="user">
      <h1>Search User</h1>
      {loading ? (
        <h1>Loading data please wait...</h1>
      ) : (
        <input
          ref={inputElement}
          type="text"
          value={searchParams}
          onChange={handleChange}
        />
      )}
      {filteredUser && filteredUser.length > 1 && (
        <Suggestion data={filteredUser} onClick={handleClick} />
      )}
    </div>
  );
};
export default SearchAutoComplete;
