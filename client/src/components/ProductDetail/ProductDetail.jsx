import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryBreadcrumbs from "../CategoryBreadcrumbs/CategoryBreadcrumbs";
import Loader from "../utils/Loader";
import NoResultsPage from "../utils/NoResultsPage";
import { formatter } from "../utils/Formatter";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [prodError, setProdError] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)

      .then((response) => {
        console.log(response.data.item);
        console.log(response.data.item.categories);
        setProduct(response.data.item);
        setCategories(response.data.item.categories);
      })
      .catch(() => {
        setProdError(true);
      });
  }, [id]);

  return (
    <div className="products-content-container">
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
              />
            </div>

            <h2 className="product-detail-helper">Descripción del producto</h2>

            <p className="product-detail-description">
              {product.description !== ""
                ? product.description
                : "* Descripción no disponible *"}
            </p>
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
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
