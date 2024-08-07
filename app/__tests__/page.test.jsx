import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a nav", () => {
    render(<Page />);

    const nav = screen.getByTestId("navbar");

    expect(nav).toBeInTheDocument();
  });
});
