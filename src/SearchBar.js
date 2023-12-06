import React from "react";

export default function SearchBar() {
  return (
    <div className="search-form">
      <form id="search-field" role="search">
        <input
          type="search"
          className="form-control me-2"
          placeholder="Type a city..."
          id="city-input"
        />
        <button
          id="search-button"
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
