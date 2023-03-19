import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import NewCharacter from "./NewCharacter";

describe("NewCharacter Component", () => {
  test("render error alert for empty input submission", () => {
    // Arrange
    render(<NewCharacter />, { wrapper: BrowserRouter });

    // Act
    const inputElement = screen.getByLabelText(/characters/i);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      // Click submit button
      userEvent.click(buttonElement);
    });

    // Assert
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
  test("render error alert for only space characters submission", () => {
    // Arrange
    render(<NewCharacter />, { wrapper: BrowserRouter });

    // Act
    const inputElement = screen.getByLabelText(/characters/i);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      // Enter space character
      userEvent.type(inputElement, " ");

      //   Click submit button
      userEvent.click(buttonElement);
    });

    // Assert
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
