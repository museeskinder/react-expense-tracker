import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store, persistedStore } from "../src/store/index.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
