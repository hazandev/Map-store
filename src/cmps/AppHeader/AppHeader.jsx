import React from "react";
import "./AppHeader.css";

export function AppHeader({setFilter, setSort }) {
  return (
    <div className="app-header">
      <div className="search-input">
        <input
          type="text"
          onChange={(ev) => {
            setFilter(ev.target.value);
          }}
          placeholder="Search"
        />
      </div>
      <div className="sort-list">
          <h4>Sort:</h4>
        <button
          className="btn btn-asc"
          onClick={() => {
            setSort(true);
          }}
        >
          ASC
        </button>
        <button
          className="btn btn-asc"
          onClick={() => {
            setSort(false);
          }}
        >
          DESC
        </button>
      </div>
    </div>
  );
}
