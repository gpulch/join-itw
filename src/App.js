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
import RepoDetails from "./components/repoDetails";
import { getUserData } from "./components/api";
import NotFound from "./components/notFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="/:username"
        element={<UserRepos />}
        loader={({ params }) =>
          getUserData(params.username)
            ? getUserData(params.username)
            : "Not Found"
        }
      />
      <Route
        path="/:username/:repo"
        element={<RepoDetails />}
        errorElement={<NotFound />}
      />

      <Route path="/error" element={<NotFound />} />
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
