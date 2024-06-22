import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import useUrlLocation from "../hooks/useUrlLocation";
import { useCities } from "../context/CityContext";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

// const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const BASE_URL = "https://geocode.maps.co/reverse";
const API_KEY = "66764ba019fa1240610658twhff992f";

function Form() {
  const { createCity } = useCities();
  const navigate = useNavigate();
  const { lat, lng } = useUrlLocation();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("2024/01/01");
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geoCodError, setGeoCodeError] = useState("");
  const [isGeoCodeLoading, setIsGeoCodeLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCountry() {
        if (!lat && !lng) return;

        setIsGeoCodeLoading(true);
        try {
          setGeoCodeError("");
          const res = await fetch(
            `${BASE_URL}?lat=${lat}&lon=${lng}&api_key=${API_KEY}`
          );
          if (!res.ok) {
            throw new Error("Error Fetching the data..");
          }
          const data = await res.json();
          const fetchData = data.address;

          setCountry(fetchData.country || "");
          setCityName(
            fetchData.city ||
              fetchData.village ||
              fetchData.municipality ||
              fetchData.town ||
              ""
          );
          setEmoji(fetchData["country_code"] || "");
        } catch (err) {
          setGeoCodeError(err);
        } finally {
          setIsGeoCodeLoading(false);
        }
      }
      fetchCountry();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName && !date) return;

    const city = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: {
        lat,
        lng,
      },
    };

    await createCity(city);

    navigate("/app/cities");
  }
  if (isGeoCodeLoading) <Spinner />;
  // if (geoCodError) return <Message message={geoCodError} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName" value={cityName}>
          Place visited:
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          required
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <input
          id="date"
          aria-label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={"primary"}> Add </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
