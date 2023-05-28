import LoginBox from "../LoginBox";
import { render, screen } from "@testing-library/react";

describe("LoginBox's tests", () => {
  test('Should render the LoginBox to the DOM', () => {
    const text = "Something to render"
    render(<LoginBox textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})