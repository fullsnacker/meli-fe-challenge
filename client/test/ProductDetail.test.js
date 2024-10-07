import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductDetail } from "../src/components/ProductDetail/ProductDetail";
import { Helmet } from "react-helmet";

jest.mock("axios");

describe("ProductDetail Component", () => {
  const mockProduct = {
    item: {
      title: "Sample Product",
      price: { amount: 1000 },
      picture: { url: "/images/sample-product.jpg" },
      condition: { value_name: "Nuevo" },
      categories: [{ name: "Category 1" }, { name: "Category 2" }],
      description: "Este es un producto de ejemplo.",
    },
  };

  test("renders loader while fetching product", () => {
    axios.get.mockImplementationOnce(() => new Promise(() => {}));

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Cargando producto")).toBeInTheDocument();
  });

  test("renders product details correctly after successful fetch", async () => {
    axios.get.mockResolvedValueOnce({ data: mockProduct });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Sample Product")).toBeInTheDocument();
      expect(screen.getByText("Nuevo")).toBeInTheDocument();
      expect(screen.getByText("$ 1.000")).toBeInTheDocument();
      expect(
        screen.getByText("Este es un producto de ejemplo.")
      ).toBeInTheDocument();
    });

    const image = screen.getByAltText("Sample Product");
    expect(image).toHaveAttribute("src", "/images/sample-product.jpg");
  });

  test("renders breadcrumbs when categories are present", async () => {
    axios.get.mockResolvedValueOnce({ data: mockProduct });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Category 1")).toBeInTheDocument();
      expect(screen.getByText("Category 2")).toBeInTheDocument();
    });
  });

  test("renders NoResultsPage on fetch error", async () => {
    axios.get.mockRejectedValueOnce(new Error("Error al cargar"));

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Producto no encontrado o no existente")
      ).toBeInTheDocument();
    });
  });

  test("sets correct SEO metadata with Helmet", async () => {
    axios.get.mockResolvedValueOnce({ data: mockProduct });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const helmet = Helmet.peek();
      expect(helmet.title).toBe("Detalles de Artículo");
      expect(
        helmet.metaTags.find((tag) => tag.name === "description").content
      ).toBe("This is a description for SEO");
    });
  });
});
