import React from 'react';

export default function FlashcardCreator({ setFlashcards, returnToViewer }) {

    const [userInput, setUserInput] = React.useState("");

    // input field
    // parser code
    // save button
    // save to local storage

    function saveFlashcards() {
        // split by new line, then split by " - "
        const parsedFlashcards = userInput.split("\n").map(line => {
            const [term, definition] = line.split(" - ");
            return { term, definition };
        });
        localStorage.setItem("flashcards", JSON.stringify(parsedFlashcards));
        // console.log("set in storage");
        setFlashcards(parsedFlashcards);
        // console.log("set in state");
        returnToViewer();
    }

    return (
        <div className="creator">
            <textarea type="text" className="input" onChange={(input) => setUserInput(input.target.value)} />
            <button onClick={saveFlashcards}>Submit</button>
        </div>
    );
}
