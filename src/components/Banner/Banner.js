import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css'

function Banner() {
  const [searchQuery, setSearchQuery] = useState(null);
  const getQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section className="banner d-flex align-items-center text-center">
      <div className="container">
        <h1 className="text-white">Best Food Waiting for Your Belly</h1>
        <div className="search-box col-md-6 my-5 mx-auto">
          <input
            type="text"
            id="query"
            onChange={getQuery}
            className="form-control"
            placeholder="Search Food Item"
          />
          <Link to={"/search=" + searchQuery}>
            <button
              onClick={() => window.scrollBy(0, 500)}
              className="search-btn btn btn-rounded"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
