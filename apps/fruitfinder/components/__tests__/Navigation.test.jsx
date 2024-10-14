import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation", () => {
  it("does not render children", () => {
    render(
      <Navigation>
        <h1>Child</h1>
      </Navigation>
    );

    const child = screen.queryByRole("heading", { level: 1 });

    expect(child).not.toBeInTheDocument();
  });
});
