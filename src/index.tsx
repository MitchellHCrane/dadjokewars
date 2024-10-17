import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { store } from "./app/store";

// Get the root element from the DOM
const container = document.getElementById("root");
// Ensure the container exists
if (container) {
  // Create a root using createRoot()
  const root = createRoot(container);

  // Render the app
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// export default connect(mapStateToProps, mapDispatchToProps)();
