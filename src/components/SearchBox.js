import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 mt1 mb2">
      <input
        className="pa3 br-pill w6 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
// w-40-l w-50-ns
