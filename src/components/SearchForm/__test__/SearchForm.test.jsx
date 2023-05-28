import SearchForm from "../SearchForm";
import { render, screen } from "@testing-library/react";

describe("SearchForm's tests", () => {
  test('Should render the SearchForm to the DOM', () => {
    const text = "Something to render"
    render(<SearchForm textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})