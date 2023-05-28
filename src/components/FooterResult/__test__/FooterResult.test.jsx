import FooterResult from "../FooterResult";
import { render, screen } from "@testing-library/react";

describe("FooterResult's tests", () => {
  test('Should render the FooterResult to the DOM', () => {
    render(<FooterResult />)
    const footerElement = screen.getByTestId("footer")
    expect(footerElement).toBeInTheDocument()
  })
})