import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("expect to render cardlist component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
