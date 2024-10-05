import React from 'react';
import noResultsIcon from "../../assets/no-results.png"

function NoResultsPage(props) {

    return (

        <div className="products-content-card">

            <div className="helper-page-container">

                <img src={noResultsIcon} className="helper-page-icon" alt="No results icon" />

                <h1 className="helper-page-message">

                    {props.type === "not_found" ?
                        "No se han encontrado resultados para ese término."
                        :
                        "Producto no encontrado o no existente"
                    }

                </h1>

            </div>

        </div>

    );

}

export default NoResultsPage;