
import styles from "./ErrorMessage.module.css"

const Error = ({ errorMessage }) => {
  <div className={styles.error}>
    <p>{errorMessage}</p>
  </div>;
};


export default Error;