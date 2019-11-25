import React from "react";

function Section({key, size, children}){
    return <div key={key} className={size} style="height: 200px">{children}</div>
}

export default Section;