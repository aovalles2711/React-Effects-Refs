import React, { useState } from "react";
import "./Card.css";

/** Renders single card */

function Card({ name, image }) {
    // Retrieve one card and never appear again
    const [{ angle, xPos, yPos }] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        yPos: Math.random() * 40 - 20,
    });

    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    return <img
            className="Card"
            alt={name}
            src={image}
            style={{ transform }} />;
}

export default Card;