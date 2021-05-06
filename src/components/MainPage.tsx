import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";

interface Props {
  onRequestRobots: any;
  robots: Array<IRobot>;
  searchField: string;
  isPending: boolean;
  onSearchChange: any;
}

interface IRobot {
  name: string;
  id: number;
  email: string;
}

class MainPage extends Component<Props> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots: Array<IRobot>) => {
    return robots.filter((robot: any) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    if (isPending) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2 mb0">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <ErrorBoundary>
            <CardList robots={this.filterRobots(robots)} />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default MainPage;
