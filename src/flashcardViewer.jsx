import React from "react";
import { Flashcard } from "./flashcard/flashcard.jsx";

export default function FlashcardViewer({ flashcards }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);

    React.useEffect(() => {
        // event listener for arrow left/right keys to change card
        const onKeyDown = (event) => {
            // left arrow: go to previous card
            if (event.key === "ArrowLeft") {
                setCurrentIndex(prev => Math.max(0, prev - 1));
                setFlipped(false);
            }
            // right arrow: go to next card
            if (event.key === "ArrowRight") {
                setCurrentIndex(prev => Math.min(flashcards.length - 1, prev + 1));
                setFlipped(false);
            }
            // up/down arrow: flip card
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

    return (
        <div className="card-container">
            <Flashcard
                card={flashcards[currentIndex]}
                flipCard={flipCard}
                flipped={flipped}
                />
        </div>
    );
}