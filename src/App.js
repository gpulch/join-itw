import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar, { loader as searchbar } from "./components/searchBar";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="/:username"
        element={<UserRepos />}
        loader={({ params }) => getUserData(params.username)}
      />
      <Route path="/:username/:repo" 
      element={<RepoDetails />}
      // loader={({ params }) => getUserData(params.username) }
      />
    </Route>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <SearchBar />
      <UserRepos />
      <RepoDetails /> */}
    </React.StrictMode>
  );
}

export default App;
