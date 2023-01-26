import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function RepoDetails(userData) {
  const repositories = useLoaderData();

  let { username, repo } = useParams();
  console.log(useParams());

  const filteredRepo = repositories.filter((repository) => {
    return repository.name === repo;
  });
  console.log(filteredRepo);

  return (
    <div>
      <div>{username}'s Repo Details :</div>
      <div>
        <ul>
          <li>Repo Name: {filteredRepo[0].name}</li>
          <li>Repo Description : {filteredRepo[0].description}</li>
          <li>Repo id : {filteredRepo[0].id} </li>
          <li>Repo Last Update : {filteredRepo[0].updated_at}</li>
          <li>Repo Language : {filteredRepo[0].language}</li>
          <li>Repo Size : {filteredRepo[0].size}</li>
          <li>Repo Stars : {filteredRepo[0].stargazers_count}</li>
          <li>Repo Watchers : {filteredRepo[0].watchers_count}</li>
          <li>Repo Forks : {filteredRepo[0].forks_count}</li>
        </ul>
      </div>
    </div>
  );
}
