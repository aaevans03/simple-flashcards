import React from "react";
import '../app.css';

export function Flashcard({card, flipCard, flipped}) {
    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={flipCard}>
            {flipped ? card.definition : card.term}
        </div>
    );
}