import React from "react";
import "./style.css";

function Card({ name, children }) {
    return (
        <div className="card text-white bg-info">
            <div className="card-header">{name}</div>
            <div className="card-body">{children}</div>
        </div>
    )
};

export default Card;
