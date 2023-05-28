import SearchResults from "../SearchResults";
import { render, screen } from "@testing-library/react";

describe("SearchResults's tests", () => {
  test('Should render the SearchResults to the DOM', () => {
    const text = "Something to render"
    render(<SearchResults textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})