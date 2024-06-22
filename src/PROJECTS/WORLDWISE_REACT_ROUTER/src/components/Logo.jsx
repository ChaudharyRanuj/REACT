import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />;
}

export default Logo;
