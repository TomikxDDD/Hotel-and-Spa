import HeroImgHome from "../HeroImgHome";
import { render, screen } from "@testing-library/react";

describe("HeroImgHome's tests", () => {
  test('Should render the HeroImgHome to the DOM', () => {
    const text = "Something to render"
    render(<HeroImgHome textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})