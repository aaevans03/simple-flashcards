import React from "react";
import { Flashcard } from "./flashcard/flashcard.jsx";

export default function App() {
    return (
        <div className="app">
            <h1>Simple Flashcards</h1>
            <div className="card-container">
                <Flashcard
                    term="Term"
                    definition="Definition"
                    />
            </div>
        </div>
    );
}
