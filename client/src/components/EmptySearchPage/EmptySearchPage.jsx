import searchProductsIcon from "../../assets/search-product.png";

export const EmptySearchPage = () => {
  return (
    <div className="products-content-container">
      <div className="products-content-card">
        <div className="helper-page-container">
          <img
            src={searchProductsIcon}
            className="helper-page-icon"
            alt="Empty search icon"
          />

          <h1 className="helper-page-message">
            Introduce un término en la caja de búsqueda para comenzar
          </h1>
        </div>
      </div>
    </div>
  );
};
