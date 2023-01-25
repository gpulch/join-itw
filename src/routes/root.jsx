import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchBar from "../components/searchBar";
import UserRepos from "../components/userRepos";
import RepoDetails from "../components/repoDetails";
import NotFound from "../components/notFound";
import styled from "styled-components";

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

const Container = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  
`;

const TopSection = styled.section`
  background-color: #282c34;
  padding: 15px 0 30px 0;
`;

function RootLayout() {
  return (
    <>
      <Container>
        <TopSection>
          GitStalker
          <SearchBar />
        </TopSection>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

export default RootLayout;
