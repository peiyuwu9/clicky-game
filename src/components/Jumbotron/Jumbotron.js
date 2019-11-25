import React from "react";

function Jumbotron({ score, highScore }) {
    return <div className="jumbotron text-center">
        <h5 className="display-4"> Your Score: {score} High Score: {highScore}</h5>
    </div>
}

export default Jumbotron;