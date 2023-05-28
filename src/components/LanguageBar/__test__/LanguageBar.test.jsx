import LanguageBar from "../LanguageBar";
import { render, screen } from "@testing-library/react";

describe("LanguageBar's tests", () => {
  test('Should render the LanguageBar to the DOM', () => {
    const text = "Something to render"
    render(<LanguageBar textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})