import React from "react";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  it("should render hello world", () => {
    // arrange
    render(<HelloWorld />);

    // act
    const title = screen.getByTestId("title");

    // assert
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(title).toBeInTheDocument();
  });
});
