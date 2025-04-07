import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BluePurpleButton from "@/components/buttons/BluePurpleButton";

describe("BluePurpleButton", () => {
  test("renders children correctly", () => {
    render(<BluePurpleButton onClick={() => {}}>Test</BluePurpleButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<BluePurpleButton onClick={handleClick}>Click Me</BluePurpleButton>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <BluePurpleButton onClick={handleClick} disabled>
        Disabled
      </BluePurpleButton>,
    );
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies bg-blue-to-purple class", () => {
    render(<BluePurpleButton onClick={() => {}}>Color Check</BluePurpleButton>);
    const button = screen.getByText("Color Check");
    expect(button).toHaveClass("bg-blue-to-purple");
  });
});
