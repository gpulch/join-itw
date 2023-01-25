import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getUserData } from "./api";

export default function UserRepos() {
  const repositionaries = useLoaderData();
  console.log(repositionaries)

  let { username } = useParams();
  console.log(username)

  function displaySearchMessage() {
    if (repositionaries.length === 0) {
      return;
    } else if (username.length > 0) {
      return (
        <div>
          <div>{`Press Enter to check if ${username} has public Repos.`}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{`User ${repositionaries} has public Repos.`}</div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>{displaySearchMessage()}</div>
      {/* display list of repos */}
      <div>
        <ul>
          {repositionaries.map((repository) => (
            <li key={repository.name}>
              <Link to={`/${username}/${repository.name}`}>{repository.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
