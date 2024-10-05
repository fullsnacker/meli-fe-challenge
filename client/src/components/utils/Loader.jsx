import React from 'react';
import spinner from "../../assets/spinner.png"

function Loader(props) {

    return (

        <div className="products-content-card">

            <div className="helper-page-container">

                <img src={spinner} className="products-loader-spinner" alt="Spinner icon"/>

                <h1 className="helper-page-message">

                    {props.message}

                </h1>

            </div>

        </div>

    );

}

export default Loader;