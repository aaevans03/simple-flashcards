import React from "react";
import '../app.css';

export function Flashcard({term, definition}) {
    const [flipped, setFlipped] = React.useState(false);

    function flipCard() {
        setFlipped(!flipped)
    }

    return (<div className="card" onClick={flipCard}>{flipped ? definition : term}</div>);
}