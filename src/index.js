import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  AuthProvider,
  NotesProvider,
  ArchivesProvider,
  TrashProvider,
  TagsProvider,
} from "./hooks/context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <NotesProvider>
            <TagsProvider>
              <ArchivesProvider>
                <TrashProvider>
                  <App />
                </TrashProvider>
              </ArchivesProvider>
            </TagsProvider>
          </NotesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
