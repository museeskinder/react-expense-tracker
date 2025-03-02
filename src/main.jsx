import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
