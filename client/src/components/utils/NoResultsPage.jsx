import PropTypes from "prop-types";
import noResultsIcon from "../../assets/no-results.png";

export const NoResultsPage = (props) => {
  return (
    <div className="products-content-card">
      <div className="helper-page-container">
        <img
          src={noResultsIcon}
          className="helper-page-icon"
          alt="No results icon"
          loading="lazy"
        />

        <h1 className="helper-page-message">
          {props.type === "not_found"
            ? "No se han encontrado resultados para ese término."
            : "Producto no encontrado o no existente"}
        </h1>
      </div>
    </div>
  );
};

NoResultsPage.propTypes = {
  type: PropTypes.string,
};
