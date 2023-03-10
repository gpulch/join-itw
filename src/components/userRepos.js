import React from "react";
import { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";

const Tiles = styled.ul`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0;
  list-style-type: none;

  a {
    text-decoration: none;
  }
  li {
    font-size: 2vw;
  }
`;

const Tile = styled.div`
  width: 25vw;
  height: 10vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #f2f2f2;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    text-align: center;
    justify-content: center;
    color: #000;
  }
  li {
    display: inline-block;
    width: 30px;

    margin: px;
  }
`;

export default function UserRepos() {
  const navigate = useNavigate();
  const repositories = useLoaderData();

  const [activePage, setActivePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRepos = repositories.slice(startIndex, endIndex);

  let { username } = useParams();
  console.log(currentRepos);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    setCurrentPage(pageNumber);
  }
  function displaySearchMessage() {
    if (username.length === 0) {
      return;
    } else if (repositories.length === 0) {
      return (
        <div>Oh Oh... looks like this user has no public repositories</div>
      );
    } else if (username.length > 0) {
      return (
        <div>
          <div>{`User ${username} has ${repositories.length} public Repos :`}</div>
        </div>
      );
    }
  }

  function displayRepos() {
    if (currentRepos === "error" || currentRepos.length === 0) {
      navigate(`/error`);
    } else {
      return (
        <Tiles>
          {currentRepos.map((repository) => (
            <Tile>
              <li key={repository.name}>
                <Link to={`/${username}/${repository.name}`}>
                  {repository.name}
                </Link>
              </li>
            </Tile>
          ))}
        </Tiles>
      );
    }
  }

  console.log(currentRepos);
  return (
    <div>
      <div>{displaySearchMessage()}</div>
      <div>
        {displayRepos()}
        <div>
          <PaginationContainer>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={repositories.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="li"
            />
          </PaginationContainer>
        </div>
      </div>
    </div>
  );
}
