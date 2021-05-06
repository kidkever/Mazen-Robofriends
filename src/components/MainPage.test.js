import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters empty robots", () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});

it("filters robots with wrong search input", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots(mockProps2.robots)).toEqual([]);
});

it("filters robots with the right search input", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots(mockProps3.robots)).toEqual([
    {
      id: 3,
      name: "john",
      email: "john@gmail.com",
    },
  ]);
});

it("returns an empty object if it is loading / pending", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: true,
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4).toEqual({});
});
