import spinner from "../../assets/spinner.png";
import PropTypes from "prop-types";

export const Loader = (props) => {
  return (
    <div className="products-content-card">
      <div className="helper-page-container">
        <img
          src={spinner}
          className="products-loader-spinner"
          alt="Spinner icon"
          loading="lazy"
        />

        <h1 className="helper-page-message">{props.message}</h1>
      </div>
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};
