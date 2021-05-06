import { setSearchField, requestRobots } from "./actions";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from "./constants";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  expect(setSearchField("wooo")).toEqual({
    type: CHANGE_SEARCH_FIELD,
    payload: "wooo",
  });
});

it("handles requesting robots API", () => {
  const store = mockStore();
  store.dispatch(requestRobots());
  const action = store.getActions();
  expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
});
