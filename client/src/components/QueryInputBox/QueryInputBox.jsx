import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import meliLogo from "../../assets/meli-cut-logo.png"
import searchIcon from "../../assets/search-icon.png"

function QueryInputBox() {
    
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/items?search=${query}`);
    };

    return (
        <header className="query-input-container">
            <form onSubmit={handleSubmit} className="query-input-form">
                <a href="/" style={{ display: "flex" }}>
                    <img src={meliLogo} className="meli-logo-asset" alt="Mecado Libre logo" href="/" />
                </a>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nunca dejes de buscar"
                    className="query-input-search"
                />
                <button
                    type="submit"
                    className="query-input-button"
                >
                    <img src={searchIcon} className="query-input-icon" alt="Search icon" />
                </button>
            </form>
        </header>
    );
}

export default QueryInputBox;