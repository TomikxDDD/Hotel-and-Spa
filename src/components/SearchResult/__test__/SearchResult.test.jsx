import SearchResult from "../SearchResult";
import { render, screen } from "@testing-library/react";

describe("SearchResult's tests", () => {
  test('Should render the SearchResult to the DOM', () => {
    const text = "Something to render"
    render(<SearchResult textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})