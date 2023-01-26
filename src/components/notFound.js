import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  height: 100vh;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 50px;
`;

const Message = styled.div`
  font-size: 3vw;
`;

export default function NotFound() {
  return (
    <Container>
      <Message>No result for this user <br/> Make sure this is a valid username </Message>
      <div>
        <Link to="/">Back to the home page</Link>
      </div>
    </Container>
  );
}
