import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import { useCities } from "../context/CityContext";
const AppLayout = () => {
  const { cities } = useCities();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map cities={cities} />
    </div>
  );
};

export default AppLayout;
