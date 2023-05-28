import Results from "../Results";
import { render, screen } from "@testing-library/react";

describe("Results's tests", () => {
  test('Should render the Results to the DOM', () => {
    const text = "Something to render"
    render(<Results textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})