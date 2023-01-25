import React from "react";
import { Link } from "react-router-dom";

export default function UserRepos(userData, username, setUsername) {
  console.log(userData.username);
  console.log(userData.userData);

  function displaySearchMessage() {
    if (userData.username.length === 0) {
      return;
    } else if (userData.username.length > 0) {
      return (
        <div>
          <div>{`Press Enter to check if ${userData.username} has public Repos.`}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{`User ${userData.username} has public Repos.`}</div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>{displaySearchMessage()}</div>
      <div>
        <ul>
          {userData.userData.map((element) => (
            <li key={element.name}>
              <Link to={`/repositories/${element.name}`}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
