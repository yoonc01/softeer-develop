import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BluePurpleButton from "@/components/buttons/BluePurpleButton";

describe("BluePurpleButton", () => {
  test("renders children correctly", () => {
    render(<BluePurpleButton onClick={() => {}}>Test</BluePurpleButton>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<BluePurpleButton onClick={handleClick}>Click Me</BluePurpleButton>);
    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <BluePurpleButton onClick={handleClick} disabled>
        Disabled
      </BluePurpleButton>,
    );
    const button = screen.getByRole("button", { name: "Disabled" });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies bg-blue-to-purple and text-neutral-white class", () => {
    render(
      <BluePurpleButton onClick={() => {}}>
        BluePurple and white!
      </BluePurpleButton>,
    );
    const button = screen.getByRole("button", {
      name: "BluePurple and white!",
    });
    expect(button).toHaveClass("bg-blue-to-purple", "text-neutral-white");
  });
});
