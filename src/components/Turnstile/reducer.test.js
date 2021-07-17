import { reducer, ADD_COIN, PUSH } from "./index";

/*
PLAN:

ADD_COIN:
    - Test what happens when we call ADD_COIN when state.locked is true 
    - Test what happens when we call ADD_COIN when state.locked is false
*/

test("When you add a coin when the turnstile is locked, the turnstile unlocks and the amount of coins in it increments by 1", () => {
  //Arrange
  const initialState = {
    locked: true,
    coins: 0,
  };
  const expected = {
    locked: false,
    coins: 1,
  };
  //Act
  const actual = reducer(initialState, { type: ADD_COIN });
  //Assert
  expect(actual).toEqual(expected);
});

test("When you add a coin when the turnstile is open, the turnstile stays unlocked, and the amount of coins in it stays the same", () => {
  //Arrange
  const initialState = {
    locked: false,
    coins: 0,
  };
  const expected = {
    ...initialState,
  };
  //Act
  const actual = reducer(initialState, { type: ADD_COIN });
  //ASSERT
  expect(actual).toEqual(expected);
});
