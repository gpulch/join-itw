import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
