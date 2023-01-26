import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 300px;
`;

const Button = styled.button`
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
padding: 10px;
width: 50px;
`;

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
    <div>
        <SearchInput value={username}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        placeholder={"Search a Github User"}></SearchInput>
     
      <Button onClick={() => navigate(`/${username}`)}>OK</Button>
    </div>
  );
}
