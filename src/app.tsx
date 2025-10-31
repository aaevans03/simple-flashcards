import React from "react";
import FlashcardViewer from "./flashcardViewer.tsx";
import FlashcardCreator from "./flashcardCreator.tsx";
import { loadParseFlashcards } from "./flashcardManager.ts";

export default function App() {
    const [flashcards, setFlashcards] = React.useState(() => {
        return loadParseFlashcards();
    });

    const [reviewMode, setReviewMode] = React.useState(true);

    function toggleMode() {
        setReviewMode(rm => !rm);
    }

    /*
    Inputting flashcards:
    1. When website is open, check local storage for data.
    2. Import those flashcards.
    3. If no local storage data, prompt user to flashcard creation page.
    */

    if (reviewMode === false) {
        return (
            <div className="app">
                <h1>Edit Flashcards</h1>
                <FlashcardCreator setFlashcards={setFlashcards} returnToViewer={toggleMode}/>
            </div>
        );
    }
    else {
        return (
            <div className="app">
                <h1>Simple Flashcards</h1>
                <FlashcardViewer flashcards={flashcards} />
                <button onClick={toggleMode}>Edit Flashcards</button>
            </div>
        );
    }

}
