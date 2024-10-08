import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CategoryBreadcrumbs } from "../src/components/CategoryBreadcrumbs/CategoryBreadcrumbs";

describe("CategoryBreadcrumbs Component", () => {
  const categories = [
    { name: "Electronics" },
    { name: "Computers" },
    { name: "Laptops" },
  ];

  it("renders category names", () => {
    render(<CategoryBreadcrumbs categories={categories} />);

    categories.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });
  });

  it("renders chevrons between categories", () => {
    render(<CategoryBreadcrumbs categories={categories} />);

    const chevrons = screen.getAllByAltText("Chevron icon");
    expect(chevrons).toHaveLength(2);
  });

  it("does not render chevron after the last category", () => {
    render(<CategoryBreadcrumbs categories={categories} />);

    const lastCategory = screen.getByText("Laptops");
    expect(lastCategory).toHaveClass("last");

    const chevrons = screen.getAllByAltText("Chevron icon");
    expect(chevrons.length).toBeLessThan(categories.length);
  });

  it("applies 'last' class to the last category", () => {
    render(<CategoryBreadcrumbs categories={categories} />);

    const lastCategory = screen.getByText("Laptops");
    expect(lastCategory).toHaveClass("last");
  });
});
