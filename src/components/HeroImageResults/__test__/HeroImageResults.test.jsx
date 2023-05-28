import HeroImageResults from "../HeroImageResults";
import { render, screen } from "@testing-library/react";

describe("HeroImageResults's tests", () => {
  test('Should render the HeroImageResults to the DOM', () => {
    const text = "Something to render"
    render(<HeroImageResults textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})