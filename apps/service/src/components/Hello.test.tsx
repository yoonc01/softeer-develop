import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

test("Hello 컴포넌트는 이름을 출력한다", () => {
  render(<Hello name="world" />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});
