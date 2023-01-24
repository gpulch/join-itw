import React from "react";
import { useState } from "react";

export default function SearchBar() {
    const [username, setUsername] = useState("");
    const [userRepos, setUserRepos] = useState([]);
  
    const handleChange = (event) => {
      setUsername(event.target.value);
    };
  
    const fetchApi = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        // fetch(`https://api.github.com/users/llccrr`)
        .then((res) => res.json())
        .then((data) => setUserRepos(data));
    };
  return (
    <div className="searchBar">
      <input value={username} onChange={handleChange}></input>
      <button onClick={fetchApi}>OK</button>
      <ul>
        {userRepos.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul>
      {console.log(userRepos)}
    </div>
  );
}
