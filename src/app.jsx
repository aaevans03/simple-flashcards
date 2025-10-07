import React from "react";
import FlashcardViewer from "./flashcardViewer.jsx";

export default function App() {
    return (
        <div className="app">
            <h1>Simple Flashcards</h1>
            <FlashcardViewer flashcards={[]} />
        </div>
    );
}
