import React from "react";
import { useState } from "react";
import UserRepos from "./userRepos";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  const handleChange = (event) => {
    setUsername(event.target.value);
    // fetchApi();
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchApi();
    }
  };

  const fetchApi = () => {
    fetch(`https://api.github.com/users/${username}/repos`)
      // fetch(`https://api.github.com/users/llccrr`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })

      .then((data) => {
        if (data.length > 0) {
          setUserData(data);
        }
      })
      .catch((error) => {
        console.log("no result");
      });
  };

  return (
    <div className="searchBar">
      <input
        value={username}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        placeholder={"Search a Github User"}
      ></input>
      <button onClick={fetchApi}>OK</button>
      {/* <ul>
        {userRepos.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul> */}
      {/* {console.log(userData)}
      {console.log(username)} */}
      <UserRepos userData={userData} username={username} />
    </div>
  );
}
