import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WhiteButton from "@/components/buttons/WhiteButton";

describe("WhiteButton", () => {
  test("renders children correctly", () => {
    render(<WhiteButton onClick={() => {}}>Test</WhiteButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<WhiteButton onClick={handleClick}>Click Me</WhiteButton>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <WhiteButton onClick={handleClick} disabled>
        Disabled
      </WhiteButton>,
    );
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies bg-blue-to-purple class", () => {
    render(<WhiteButton onClick={() => {}}>Color Check</WhiteButton>);
    const button = screen.getByText("Color Check");
    expect(button).toHaveClass("bg-neutral-white");
  });
});
