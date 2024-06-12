import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact Us Page test cases", () => {
  test("shuold load Contact Us in component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });


  it("shuold load Contact Us in component", () => {
    render(<Contact />);

    const inputBox = screen.getByPlaceholderText("Name")

    expect(inputBox).toBeInTheDocument();

  });

});
