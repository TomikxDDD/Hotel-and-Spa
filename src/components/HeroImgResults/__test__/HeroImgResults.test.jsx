import HeroImgResults from "../HeroImgResults";
import { render, screen } from "@testing-library/react";

describe("HeroImgResults's tests", () => {
  test('Should render the HeroImgResults to the DOM', () => {
    const text = "Something to render"
    render(<HeroImgResults textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})