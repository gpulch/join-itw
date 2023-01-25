import React from "react";
import { useParams } from "react-router-dom";

export default function RepoDetails(userData) {
  let { username } = useParams();
  let { repo } = useParams();
  console.log(userData)
  console.log(repo)
  return (

    <div>
      <div>{username}'s Repo Details :</div>
      <div>
        <ul>
          <li>Repo Name: {repo}</li>
          <li>Repo Description</li>
          <li>Repo Language</li>
          <li>Repo Last Update</li>
        </ul>
      </div>

    </div>
  );
}
