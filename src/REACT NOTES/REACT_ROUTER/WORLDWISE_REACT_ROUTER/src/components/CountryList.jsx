import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../context/CityContext";
const CountryList = () => {
 const {cities, isLoading} = useCities()
  const currCities = cities.filter((city) => city.cityName);

  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message={"Click on Map to add country"} />;

  return (
    <div className={styles.countryList}>
      {currCities.map((city, idx) => (
        <CountryItem country={city} key={idx} />
      ))}
    </div>
  );
};

export default CountryList;
