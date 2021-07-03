import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <Link to="/">Return To main page</Link>
    </div>
  </div>
);

export default PageNotFound;
