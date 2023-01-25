import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchBar from "../components/searchBar";
import UserRepos from "../components/userRepos";
import RepoDetails from "../components/repoDetails";
import NotFound from "../components/notFound";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         GitStalk
//         <SearchBar  />
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: "/repositories",
//         element: <UserRepos />,
//       },
//       {
//         path: "/repositories/:repodetails",
//         element: <RepoDetails />,
//       },
//       {
//         path: "/*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

function RootLayout() {
  return (
    <>
      GitStalker
      <SearchBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout