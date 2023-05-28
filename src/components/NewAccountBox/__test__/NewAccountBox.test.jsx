import NewAccountBox from "../NewAccountBox";
import { render, screen } from "@testing-library/react";

describe("NewAccountBox's tests", () => {
  test('Should render the NewAccountBox to the DOM', () => {
    const text = "Something to render"
    render(<NewAccountBox textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})