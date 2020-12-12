import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
  };
};

const App = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  //const [robots, setRobots] = useState([]);
  //const [searchfield, setSearchfield] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }
  //const { onRequestRobots } = props;
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     setRobots(users);
    //   });
    props.onRequestRobots();
  }, []);

  // const onSearchChange = (event) => {
  //   setSearchfield(event.target.value);
  // };

  //const { robots, searchfield } = this.state;
  const { searchField, onSearchChange, robots, isPending } = props;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  if (isPending) {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
