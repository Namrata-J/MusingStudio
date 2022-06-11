import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider, CategoryProvider, VideoProvider, FilterProvider, AuthProvider, VideoCardProvider } from "./contexts/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <CategoryProvider>
            <HeaderProvider>
              <FilterProvider>
                <VideoCardProvider>
                  <App />
                </VideoCardProvider>
              </FilterProvider>
            </HeaderProvider>
          </CategoryProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
