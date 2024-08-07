import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders children", () => {
    render(
      <Button>
        <h1>Child</h1>
      </Button>
    );

    const child = screen.getByRole("heading", { level: 1 });

    expect(child).toBeInTheDocument();
  });
});
