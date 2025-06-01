import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Usa "client" para React 18
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Nueva sintaxis
root.render(<App />);
