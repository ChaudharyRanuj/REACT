import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000/cities";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  error: "",
  currCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, cities: [...action.payload], isLoading: false };
    case "city/loaded":
      return { ...state, currCity: action.payload, isLoading: false };
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currCity: action.payload,
        isLoading: false,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        currCity: {},
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "rejected":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, error, currCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });

        const res = await fetch("http://localhost:3000/cities");
        if (!res.ok) {
          throw new Error("Problem fetching the data.");
        }
        const data = await res.json();
        console.log(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "Error Occured while fetching cities",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`http://localhost:3000/cities/${id}`);
      if (!res.ok) {
        throw new Error("Problem fetching the data.");
      }
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Error Occured while fetching cities",
      });
    }
  }

  async function createCity(city) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Problem Creating city.");
      }
      const data = await res.json();

      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Error Occured while fetching city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      console.log(res);
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: `Error deleting the city id ${id}`,
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currCity,
        createCity,
        deleteCity,
        getCity,
        dispatch,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context == undefined) {
    throw new Error("Error getting the context");
  }

  return context;
}

export { useCities, CitiesProvider };
