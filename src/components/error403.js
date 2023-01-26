import React from "react";
import { Link } from "react-router-dom";

export default function Error403() {
  return (
    <div>
      <div>ERROR 403 : too many requests, try again later</div>
      <div>
        <Link to="/">Go back to the home page</Link>
      </div>
    </div>
  );
}
