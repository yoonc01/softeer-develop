import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlueButton from "@/components/buttons/BlueButton";

describe("BlueButton", () => {
  test("renders children correctly", () => {
    render(<BlueButton onClick={() => {}}>Blue!</BlueButton>);
    const button = screen.getByText("Blue!");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<BlueButton onClick={handleClick}>Click me</BlueButton>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <BlueButton onClick={handleClick} disabled>
        Can't click
      </BlueButton>,
    );
    fireEvent.click(screen.getByText("Can't click"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies bg-primary-blue class", () => {
    render(<BlueButton onClick={() => {}}>Blue!</BlueButton>);
    const button = screen.getByText("Blue!");
    expect(button).toHaveClass("bg-primary-blue");
  });
});
