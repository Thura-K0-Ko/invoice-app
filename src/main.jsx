import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const GeneralContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContext.Provider value={{myname: "thura KoKo"}}>
    <App />
  </GeneralContext.Provider>
);
