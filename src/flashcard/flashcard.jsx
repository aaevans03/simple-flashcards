import React from "react";

export function Flashcard({term, definition}) {
    const [flipped, setFlipped] = React.useState(false);

    function flipCard() {
        setFlipped(!flipped)
    }

    if (flipped) {
        return (<div onClick={flipCard}>{definition}</div>)
    }

    return (<div onClick={flipCard}>{term}</div>);
}