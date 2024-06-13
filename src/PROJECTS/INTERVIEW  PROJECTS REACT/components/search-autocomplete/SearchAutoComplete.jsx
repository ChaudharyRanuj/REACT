import { useRef, useState } from "react";
import "./SearchAutoComplete.css";
import { useEffect } from "react";
import Suggestions from "./Suggestions";
function SearchAutoComplete() {
  const [searchParams, setSearchParams] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [filterUsers, setFilterUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  
  function handleSearchParams(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filterData);
      setShowDropDown(true);
    }
  }
 
  useEffect(() => {
    async function featchUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) {
          throw new Error("Problem fetching user data");
        }
        const data = await res.json();
        if (data && data.users && data.users.length > 0) {
          setUsers(data.users.map((user) => user.firstName));
        }
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    featchUsers();
  }, []);

  return (
    <div className="search-autocomplete">
      <h1>Search AutoComplete</h1>
      <input type="text" value={searchParams} onChange={handleSearchParams} placeholder="Search username..."/>
      {isLoading && <p>User data is loading please wait..</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {showDropDown ?<Suggestions data={filterUsers}/> : null}
    </div>
  );
}

export default SearchAutoComplete;
