import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { QueryInputBox } from "../src/components/QueryInputBox/QueryInputBox";

jest.mock("../../assets/meli-cut-logo.png", () => "meli-logo.png");
jest.mock("../../assets/search-icon.png", () => "search-icon.png");

describe("QueryInputBox Component", () => {
  test("renders logo, input, and search button", () => {
    render(
      <MemoryRouter>
        <QueryInputBox />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("MecadoLibre logo");
    expect(logo).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("updates query state on input change", () => {
    render(
      <MemoryRouter>
        <QueryInputBox />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");

    fireEvent.change(input, { target: { value: "laptop" } });
    expect(input.value).toBe("laptop");
  });

  test("navigates to the correct URL on form submit", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <QueryInputBox />
      </Router>
    );

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "laptop" } });

    fireEvent.click(button);

    expect(history.location.pathname).toBe("/items");
    expect(history.location.search).toBe("?search=laptop");
  });

  test("does not navigate if query is empty", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <QueryInputBox />
      </Router>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(history.location.pathname).toBe("/");
  });
});
