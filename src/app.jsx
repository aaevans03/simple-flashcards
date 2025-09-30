import React from "react";
import { Flashcard } from "./flashcard/flashcard.jsx";

export default function App() {
    return (
        <div>
            <h1>Simple Flashcards</h1>
            <Flashcard
                term="Term"
                definition="Definition"
            />
        </div>
    );
}
