import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

describe("Search", () => {
  test("renders search", () => {
    render(<Search />);
    expect(screen.getByTestId(/weather/i)).toBeTruthy();
  });
  test("input available", () => {
    render(<Search />);
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("placeholder", "Search for location");
  });
  test("pass valid input field", () => {
    render(<Search />);

    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "London");

    expect(screen.getByTestId("search-input")).toHaveValue("London");
  });
});
