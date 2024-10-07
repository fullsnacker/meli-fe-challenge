import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import meliLogo from "../../assets/meli-cut-logo.png";
import searchIcon from "../../assets/search-icon.png";

export const QueryInputBox = () => {
  const [query, setQuery] = useState(
    new URLSearchParams(useLocation().search).get("search") || ""
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) navigate(`/items?search=${query}`);
  };

  return (
    <header className="query-input-container">
      <form onSubmit={handleSubmit} className="query-input-form">
        <a href="/" style={{ display: "flex" }}>
          <img
            src={meliLogo}
            className="meli-logo-asset"
            alt="MecadoLibre logo"
            href="/"
            loading="lazy"
          />
        </a>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
          className="query-input-search"
        />
        <button type="submit" className="query-input-button">
          <img
            src={searchIcon}
            className="query-input-icon"
            alt="Search icon"
            loading="lazy"
          />
        </button>
      </form>
    </header>
  );
};
