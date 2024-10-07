import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CategoryBreadcrumbs } from "../CategoryBreadcrumbs/CategoryBreadcrumbs";
import { formatter, Loader, NoResultsPage } from "../utils";
import { Helmet } from "react-helmet";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [prodError, setProdError] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)
      .then((response) => {
        setProduct(response.data.item);
        setCategories(response.data.item.categories);
      })
      .catch(() => {
        setProdError(true);
      });
  }, [id]);

  return (
    <div className="products-content-container">
      <Helmet>
        <title>Detalles de Artículo</title>
        <meta name="description" content="This is a description for SEO" />
        <meta name="keywords" content="React, SEO, JavaScript" />
      </Helmet>
      {!product && !prodError && <Loader message={"Cargando producto"} />}

      {prodError && <NoResultsPage type={"error"} />}

      {categories.length > 0 && <CategoryBreadcrumbs categories={categories} />}

      {product && (
        <div className="products-content-card">
          <div className="product-detail-info-desc">
            <div className="product-detail-image-container">
              <img
                src={product.picture.url}
                alt={product.title}
                className="product-detail-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="product-detail-info-buy">
            <div className="product-detail-condition">
              <p>{product.condition.value_name}</p>
            </div>

            <h1 className="product-detail-title">{product.title}</h1>

            <p className="product-detail-price">
              {formatter.format(product.price.amount)}
            </p>

            <button className="product-buy-button">Comprar</button>
          </div>
          <div className="product-description-container">
            {" "}
            <h2 className="product-detail-helper">Descripción del producto</h2>
            <p className="product-detail-description">
              {product.description !== ""
                ? product.description
                : "* Descripción no disponible *"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
