import React from "react";
import  "./styles.css"

const Button =(onClick)=>{
    return(
        <>
        <button type="submit" className="Button" onClick={() => onClick}> Load more </button>
        </>
    )
}

export default Button;