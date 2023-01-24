import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchBar from "../components/searchBar";
import userRepos from "../components/userRepos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home
        <SearchBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/repositories",
        element: <userRepos />,
      },
      {
        path: "/*",
        element: <>not found</>,
      },
    ],
  },
]);
