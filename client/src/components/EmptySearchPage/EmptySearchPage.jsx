import { Helmet } from "react-helmet";
import searchProductsIcon from "../../assets/search-product.png";

export const EmptySearchPage = () => {
  return (
    <div className="products-content-container">
      <Helmet>
        <title>Búsqueda de Productos</title>
        <meta
          name="description"
          content="Página en blanco para buscar productos"
        />
        <meta
          name="keywords"
          content="React, SEO, JavaScript, Mercadolibre, Challenge"
        />
      </Helmet>
      <div className="products-content-card">
        <div className="helper-page-container">
          <img
            src={searchProductsIcon}
            className="helper-page-icon"
            alt="Empty search icon"
            loading="lazy"
          />

          <h1 className="helper-page-message">
            Introduce un término en la caja de búsqueda para comenzar
          </h1>
        </div>
      </div>
    </div>
  );
};
