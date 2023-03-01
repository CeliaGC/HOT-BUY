import React from "react";
import './DetailView.css'



export default function DetailView ({name, price, }) {
    return (
        <>
        <h1>{name}</h1>
        <h1>{price}</h1>
        </>
    )
}
