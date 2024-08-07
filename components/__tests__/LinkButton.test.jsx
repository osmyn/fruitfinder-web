import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LinkButton from "../LinkButton";

describe("LinkButton", () => {
  it("renders children", () => {
    render(
      <LinkButton href="./">
        <h1>Child</h1>
      </LinkButton>
    );

    const child = screen.getByRole("heading", { level: 1 });

    expect(child).toBeInTheDocument();
  });
  it("passes props", () => {
    render(
      <LinkButton href="./" className="test">
        <h1>Child</h1>
      </LinkButton>
    );

    const button = screen.getByRole("link");

    expect(button).toHaveProperty("className");
  });
});
