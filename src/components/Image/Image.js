import React from "react";

function Image({ id, name, image, handleOnClickImage }) {
    return (
        <img
            id={id}
            src={image}
            alt={name}
            onClick={() => handleOnClickImage(id)}
        />
    )
};

export default Image;