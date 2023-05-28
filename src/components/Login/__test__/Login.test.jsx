import Login from "../Login";
import { render, screen } from "@testing-library/react";

describe("Login's tests", () => {
  test('Should render the component to the DOM', () => {
    const text = "Something to render"
    render(<Login textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})