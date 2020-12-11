import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  //const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (!robots.length) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2 mb0">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </div>
    );
  }
};

export default App;
