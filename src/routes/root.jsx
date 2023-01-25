import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchBar from "../components/searchBar";
import UserRepos from "../components/userRepos";
import UserRepoInfo from "../components/repoDetails";
import RepoDetails from "../components/repoDetails";
import NotFound from "../components/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home
        <SearchBar  />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/repositories",
        element: <UserRepos />,
      },
      {
        path: "/repositories/:repodetails",
        element: <RepoDetails />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);
