import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BaseButton from "@/components/buttons/BaseButton";

describe("BaseButton", () => {
  test("renders children correctly", () => {
    render(<BaseButton onClick={() => {}}>Click me</BaseButton>);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON"); // HTML 요소가 button인지 확인
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<BaseButton onClick={handleClick}>Click me</BaseButton>);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <BaseButton onClick={handleClick} disabled>
        Click me
      </BaseButton>,
    );

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled(); // jest-dom matcher
  });

  test("applies custom className", () => {
    render(
      <BaseButton onClick={() => {}} className="my-custom-class">
        Click me
      </BaseButton>,
    );

    const button = screen.getByText("Click me");
    expect(button).toHaveClass("my-custom-class");
  });

  test("has correct classes when disabled/enabled", () => {
    const { rerender } = render(
      <BaseButton onClick={() => {}} disabled>
        Disabled
      </BaseButton>,
    );

    const disabledButton = screen.getByText("Disabled");
    expect(disabledButton).toHaveClass("opacity-30");
    expect(disabledButton).not.toHaveClass("hover-scale-ani");

    rerender(
      <BaseButton onClick={() => {}} disabled={false}>
        Enabled
      </BaseButton>,
    );

    const enabledButton = screen.getByText("Enabled");
    expect(enabledButton).toHaveClass("hover-scale-ani");
    expect(enabledButton).toHaveClass("opacity-100");
  });
});
