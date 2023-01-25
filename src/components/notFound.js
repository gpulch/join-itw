import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div>This page does not exist</div>
      <div>
        <Link to="/">Go back to the home page</Link>
      </div>
    </div>
  );
}
