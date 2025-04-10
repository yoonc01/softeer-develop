import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WhiteButton from "@/components/buttons/WhiteButton";

describe("WhiteButton", () => {
  test("renders children correctly", () => {
    render(<WhiteButton onClick={() => {}}>Test</WhiteButton>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<WhiteButton onClick={handleClick}>Click Me</WhiteButton>);
    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <WhiteButton onClick={handleClick} disabled>
        Disabled
      </WhiteButton>,
    );
    const button = screen.getByRole("button", { name: "Disabled" });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies bg-neutral-white and text-neutral-black class", () => {
    render(<WhiteButton onClick={() => {}}>white and black!</WhiteButton>);
    const button = screen.getByRole("button", { name: "white and black!" });
    expect(button).toHaveClass("bg-neutral-white", "text-neutral-black");
  });
});
