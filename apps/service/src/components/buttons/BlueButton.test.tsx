import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlueButton from "@/components/buttons/BlueButton";

test("renders children correctly", () => {
  render(<BlueButton onClick={() => {}}>Blue!</BlueButton>);
  const button = screen.getByRole("button", { name: "Blue!" });
  expect(button).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<BlueButton onClick={handleClick}>Click me</BlueButton>);
  fireEvent.click(screen.getByRole("button", { name: "Click me" }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("does not call onClick when disabled", () => {
  const handleClick = jest.fn();
  render(
    <BlueButton onClick={handleClick} disabled>
      Can't click
    </BlueButton>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Can't click" }));
  expect(handleClick).not.toHaveBeenCalled();
});

test("applies bg-primary-blue and text-neutral-white class", () => {
  render(<BlueButton onClick={() => {}}>Blue and White!</BlueButton>);
  const button = screen.getByRole("button", { name: "Blue and White!" });
  expect(button).toHaveClass("bg-primary-blue", "text-neutral-white");
});
