import React from "react";
import { useState } from "react";
import { getUserData } from "./api";
import RepoDetails from "./repoDetails";
import UserRepos from "./userRepos";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
    // getUserData();
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //   getUserData(username, setUserData);
      navigate(`/${username}`);
    }
  };

  return (
    <div className="searchBar">
      <input
        value={username}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        placeholder={"Search a Github User"}
      ></input>
      <button onClick={() => navigate(`/${username}`)}>OK</button>
      {/* <UserRepos userData={userData} username={username} /> */}
      {/*<RepoDetails userData={userData}/> */}
    </div>
  );
}
