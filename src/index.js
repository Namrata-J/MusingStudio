import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { MStudioProviders } from "./components/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MStudioProviders>
        <App />
      </MStudioProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
