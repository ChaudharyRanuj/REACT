import useLocalStorage from "./useLocalStorage";
import "./style.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
}
