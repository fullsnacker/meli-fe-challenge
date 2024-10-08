import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmptySearchPage } from "../src/components/EmptySearchPage/EmptySearchPage";
import { Helmet } from "react-helmet";

describe("EmptySearchPage Component", () => {
  it("renders SEO meta tags using Helmet", () => {
    render(<EmptySearchPage />);

    const helmet = Helmet.peek();

    expect(helmet.title).toBe("Búsqueda de Productos");
    expect(
      helmet.metaTags.find((tag) => tag.name === "description").content
    ).toBe("Página en blanco para buscar productos");
    expect(helmet.metaTags.find((tag) => tag.name === "keywords").content).toBe(
      "React, SEO, JavaScript, Mercadolibre, Challenge"
    );
  });

  it("renders search icon and message", () => {
    render(<EmptySearchPage />);

    const image = screen.getByAltText("Empty search icon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "alt",
      expect.stringContaining("Empty search icon")
    );

    const message = screen.getByText(
      "Introduce un término en la caja de búsqueda para comenzar"
    );
    expect(message).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<EmptySearchPage />);

    const container = screen
      .getByText("Introduce un término en la caja de búsqueda para comenzar")
      .closest("div");
    expect(container).toHaveClass("helper-page-container");

    const image = screen.getByAltText("Empty search icon");
    expect(image).toHaveClass("helper-page-icon");
  });
});
