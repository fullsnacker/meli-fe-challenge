import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import shippingIcon from "../../assets/truck.png";

import { CategoryBreadcrumbs } from "../CategoryBreadcrumbs/CategoryBreadcrumbs";
import { formatter, Loader, NoResultsPage } from "../utils";
import { Helmet } from "react-helmet";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const QueryResList = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useQuery().get("search");

  useEffect(() => {
    setLoading(true);
    setItems([]);
    setCategories([]);

    axios
      .get(`/api/items?q=${query}`)

      .then((response) => {
        setCategories(response.data.categories);

        setItems(response.data.items);

        setLoading(false);
      });
  }, [query]);

  return (
    <div className="products-content-container">
      <Helmet>
        <title>Resultado de Búsqueda</title>
        <meta name="description" content="This is a description for SEO" />
        <meta name="keywords" content="React, SEO, JavaScript" />
      </Helmet>
      {loading && <Loader message={"Buscando productos"} />}

      {categories.length > 0 && <CategoryBreadcrumbs categories={categories} />}

      <div className="products-content-card">
        {items.length > 0 ? (
          <ol className="products-list-container">
            {items.map((item, index) => (
              <li key={index} className="products-list-item">
                <Link to={`/items/${item.id}`} className="product-list-nav">
                  <div className="product-image-container">
                    <img
                      className="product-list-image"
                      src={item.picture}
                      alt={item.sanitized_title}
                      loading="lazy"
                    />
                  </div>

                  <div className="product-list-info">
                    <div className="product-list-subcontainer">
                      <div className="product-list-shipping">
                        <p className="product-list-price">
                          {formatter.format(item.price.amount)}
                        </p>

                        {item.free_shipping && (
                          <div className="shipping-icon-container">
                            <img
                              src={shippingIcon}
                              className="shipping-icon"
                              alt="Shipping truck logo"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>

                      <p className="product-list-address">
                        {item.seller_address}
                      </p>
                    </div>

                    <h2 className="product-list-title">{item.title}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          !loading && <NoResultsPage type={"not_found"} />
        )}
      </div>
    </div>
  );
};
