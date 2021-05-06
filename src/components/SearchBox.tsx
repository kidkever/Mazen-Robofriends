import React from "react";
import "./SearchBox.css";

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div className="pa2 mt1 mb2">
      <input
        aria-label="Search Robots"
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
