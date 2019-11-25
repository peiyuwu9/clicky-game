import React from "react";

function Section({key, size, children}){
    return <div key={key} className={size}>{children}</div>
}

export default Section;