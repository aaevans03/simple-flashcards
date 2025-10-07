import React from "react";
import { Flashcard } from "./flashcard/flashcard.jsx";

export default function FlashcardViewer({ flashcards }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        // event listener for arrow left/right keys to change card
        const onKeyDown = (event) => {
            // left arrow: go to previous card
            if (event.key === "ArrowLeft") {
                setCurrentIndex(prev => Math.max(0, prev - 1));
            }
            // right arrow: go to next card
            if (event.key === "ArrowRight") {
                setCurrentIndex(prev => Math.min(tempFlashcards.length - 1, prev + 1));
            }
        };
        window.addEventListener("keydown", onKeyDown);
        
        // remove event listener when component unmounts
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const tempFlashcards = [
        { term: "Term 1", definition: "Definition 1" },
        { term: "Term 2", definition: "Definition 2" },
        { term: "Term 3", definition: "Definition 3" },
    ]

    return (
        <div className="card-container">
            <Flashcard
                term={tempFlashcards.at(currentIndex).term}
                definition={tempFlashcards.at(currentIndex).definition}
                />
        </div>
    );
}