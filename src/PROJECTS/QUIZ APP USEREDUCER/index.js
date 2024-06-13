import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import { QuizProvider } from "./context/QuizProvider";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
