import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ele vai buscar o arquivo App.jsx automaticamente




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
