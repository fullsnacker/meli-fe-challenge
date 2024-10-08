import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
import { QueryResList } from "../src/components/QueryResList/QueryResList";

jest.mock("../../assets/truck.png", () => "shipping-icon.png");

jest.mock("axios");

describe("QueryResList Component", () => {
  const mockResponse = {
    data: {
      categories: ["Electronics", "Books"],
      items: [
        {
          id: "123",
          title: "Sample Product 1",
          price: { amount: 299 },
          picture: "product1.jpg",
          free_shipping: true,
          seller_address: "City A",
        },
        {
          id: "456",
          title: "Sample Product 2",
          price: { amount: 499 },
          picture: "product2.jpg",
          free_shipping: false,
          seller_address: "City B",
        },
      ],
    },
  };

  beforeEach(() => {
    axios.get.mockResolvedValue(mockResponse);
  });

  it("renders loading indicator and fetches items", async () => {
    render(
      <MemoryRouter initialEntries={["/items?search=phone"]}>
        <Routes>
          <Route path="/items" element={<QueryResList />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Buscando productos/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Sample Product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Sample Product 2/i)).toBeInTheDocument();
    });

    expect(screen.getByText("City A")).toBeInTheDocument();
    expect(screen.getByText("City B")).toBeInTheDocument();
  });

  it("shows 'NoResultsPage' when no items are found", async () => {
    const emptyResponse = {
      data: {
        categories: [],
        items: [],
      },
    };

    axios.get.mockResolvedValue(emptyResponse);

    render(
      <MemoryRouter initialEntries={["/items?search=unknown"]}>
        <Routes>
          <Route path="/items" element={<QueryResList />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("No se han encontrado resultados para ese término.")
      ).toBeInTheDocument();
    });
  });

  it("renders free shipping icon if applicable", async () => {
    render(
      <MemoryRouter initialEntries={["/items?search=phone"]}>
        <Routes>
          <Route path="/items" element={<QueryResList />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Sample Product 1/i)).toBeInTheDocument();
    });

    const shippingIcon = screen.getAllByAltText("Shipping truck logo");
    expect(shippingIcon).toHaveLength(1);
    expect(shippingIcon[0]).toHaveAttribute("src", "shipping-icon.png");
  });
});
