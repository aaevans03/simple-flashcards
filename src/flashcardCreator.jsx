import React from 'react';

export default function FlashcardCreator() {

    const [userInput, setUserInput] = React.useState("");
    const [flashcards, setFlashcards] = React.useState([]);
    const [testText, setTestText] = React.useState("");

    // input field
    // parser code
    // save button
    // save to local storage

    async function saveFlashcards() {
        // split by new line, then split by " - "
        const parsedFlashcards = userInput.split("\n").map(line => {
            const [term, definition] = line.split(" - ");
            return { term, definition };
        });
        setFlashcards(parsedFlashcards);
        setTestText(JSON.stringify(parsedFlashcards, null, 2));
        localStorage.setItem("flashcards", JSON.stringify(parsedFlashcards));
    }

    return (
        <div className="creator">
            <textarea type="text" className="input" onChange={(input) => setUserInput(input.target.value)} />
            <button onClick={saveFlashcards}>Submit</button>
            <p>{testText}</p>
        </div>
    );
}
