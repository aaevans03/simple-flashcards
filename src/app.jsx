import React from "react";
import { Flashcard } from "./flashcard/flashcard.jsx";

export default function App() {
    return (
        <body>
            <h1>Simple Flashcards</h1>
            <div className="card-container">
                <Flashcard
                    term="Term"
                    definition="Definition"
                    />
            </div>
        </body>
    );
}
