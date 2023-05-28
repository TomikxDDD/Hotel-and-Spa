import FooterHome from "../FooterHome";
import { render, screen } from "@testing-library/react";

describe("FooterHome's tests", () => {
  test('Should render the FooterHome to the DOM', () => {
    render(<FooterHome />)
    const footerElement = screen.getByTestId("footer")
    expect(footerElement).toBeInTheDocument()
  })
})