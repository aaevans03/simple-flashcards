import React from "react";
import '../app.css';

export function Flashcard({term, definition}) {
    const [flipped, setFlipped] = React.useState(false);

    React.useEffect(() => {
        // event listener for arrow up/down keys to flip card
        const onKeyDown = (event) => {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                flipCard();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        
        // remove event listener when component unmounts
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    function flipCard() {
        setFlipped(f => !f);
    }

    return (<div className="card" onClick={flipCard}>{flipped ? definition : term}</div>);
}