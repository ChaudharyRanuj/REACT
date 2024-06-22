import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";

const Sidebar = () => {
  
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
    </div>
  );
};

export default Sidebar;
