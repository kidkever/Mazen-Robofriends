import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 mt1 mb2">
      <input
        className="pa3 br-pill w-30 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
