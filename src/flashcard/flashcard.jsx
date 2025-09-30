import React from "react";

export function Card() {
    const [flipped, setFlipped] = React.useState(false);

    function flipCard() {
        setFlipped(!flipped)
    }

    if (flipped) {
        return (<div onClick={flipCard}>This is the back of the card</div>)
    }

    return (<div onClick={flipCard}>This is a card</div>);
}