import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import { searchRobots, requestRobots } from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return the initail state", () => {
    expect(searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return the initail state", () => {
    expect(requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })
    ).toEqual({ isPending: true, robots: [], error: "" });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "error",
      })
    ).toEqual({ isPending: false, robots: [], error: "error" });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 123 }],
      })
    ).toEqual({ isPending: false, robots: [{ id: 123 }], error: "" });
  });
});
