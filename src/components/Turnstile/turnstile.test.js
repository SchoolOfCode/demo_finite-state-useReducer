import React from "react";
import { act, render } from "@testing-library/react";

import Turnstile from "./";

test("The Turnstile component renders with the turnstile container", () => {
  //Arrange:
  //getByTestId
  const { getByTestId } = render(<Turnstile />);
  //Act:
  const actual = getByTestId("turnstile-container");
  //Assert:
  expect(actual).toBeInTheDocument();
});

test("When the Turnstile component renders, it contains the coin and push buttons", () => {
  //Arrange
  const { getByTestId, getByText } = render(<Turnstile />);
  //Act
  const actual = getByTestId("turnstile-container");
  const coinButton = getByText("💰");
  const pushButton = getByText("🤚");
  //Assert
  expect(actual).toContainElement(coinButton);
  expect(actual).toContainElement(pushButton);
});
