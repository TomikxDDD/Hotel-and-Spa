
import Button from "../Button";
import { render, screen } from "@testing-library/react";

describe("Button's tests", () => {
  test('Should render the Button to the DOM', () => {
    render(<Button />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()
  })
})