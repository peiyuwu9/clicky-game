import React from "react";

function Image({ id, name, image, onClick }) {
    return (
        <img
            id={id}
            src={image}
            alt={name}
            onClick={() => onClick(id)}
        />
    )
};

export default Image;