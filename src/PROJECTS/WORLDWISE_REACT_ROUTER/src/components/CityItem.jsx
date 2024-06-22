import { useCities } from "../context/CityContext";
import styles from "./CityItem.module.css";
import { Link, useNavigate } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const navigate = useNavigate();
  const { cityName, id, position, date } = city;
  let lat = position.lat;
  let lng = position.lng;

  const { currCity, deleteCity } = useCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem}  ${styles.name}  ${
          currCity?.id == id ? styles["cityItem--active"] : ""
        }  `}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        {cityName} <span className={styles.date}>{formatDate(date)}</span>
        <span className={styles.deleteBtn} onClick={handleDelete}>
          ❌
        </span>
      </Link>
    </li>
  );
};

export default CityItem;
