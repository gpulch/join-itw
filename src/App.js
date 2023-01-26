import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./routes/root";
import UserRepos from "./components/userRepos";
import RepoDetails, {
  loader as repoDetailsLoader,
} from "./components/repoDetails";
import { getUserData } from "./components/api";
import NotFound from "./components/notFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route
          path="/:username"
          element={<UserRepos />}
          loader={({ params }) =>
            getUserData(params.username)
              ? getUserData(params.username)
              : "Not Found"
          }
          errorElement={<NotFound />}
        />
        <Route
          path="/:username/:repo"
          element={<RepoDetails />}
          loader={({ params }) =>
            getUserData(params.username)
              ? getUserData(params.username)
              : "Not Found"
          }
          errorElement={<NotFound />}

          // loader={repoDetailsLoader}
        />
        <Route path="/error" element={<NotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
