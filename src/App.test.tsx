import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Search weather by by a city or by clickoing on a nav icon/i
  );
  expect(linkElement).toBeInTheDocument();
});
