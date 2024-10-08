import React from "react";
import PropTypes from "prop-types";
import chevronRight from "../../assets/chevron-right.png";

export const CategoryBreadcrumbs = (props) => {
  return (
    <div className="breadcrumbs-main-container">
      {props.categories.map((cat, index) => (
        <React.Fragment key={index}>
          <p
            className={`breadcrumbs-category-name ${
              index === props.categories.length - 1 ? "last" : ""
            }`}
          >
            {cat.name}
          </p>

          {index < props.categories.length - 1 && (
            <img
              src={chevronRight}
              className="breadcrumbs-category-chevron"
              alt="Chevron icon"
              loading="lazy"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

CategoryBreadcrumbs.propTypes = {
  categories: PropTypes.array,
};
