import React from "react";
import FlashcardViewer from "./flashcardViewer.jsx";

export default function App() {

    const flashcards = [
        { term: "Term 1", definition: "Definition 1" },
        { term: "Term 2", definition: "Definition 2" },
        { term: "Term 3", definition: "Definition 3" },
    ]

    return (
        <div className="app">
            <h1>Simple Flashcards</h1>
            <FlashcardViewer flashcards={flashcards} />
        </div>
    );
}
