import React from "react";
import "./searchStyle.css";

export default function SearchBar() {
  return (
    <div className="searchBg pt-2 pb-2">
      <div className="container">
        <input
          className="searchInput"
          type="text"
          placeholder="Search for GIFs and Stickers "
          //value={name}
          //onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
