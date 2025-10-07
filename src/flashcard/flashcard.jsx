import React from "react";
import '../app.css';

export function Flashcard({card, flipCard, flipped}) {
    return (
        <div className="card" onClick={flipCard}>
            {flipped ? card.definition : card.term}
        </div>
    );
}