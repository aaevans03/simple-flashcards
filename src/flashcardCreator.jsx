import React from 'react';

export default function FlashcardCreator({ setFlashcards, returnToViewer }) {

    const [userInput, setUserInput] = React.useState(() => {
        // load from local storage
        const savedFlashcards = JSON.parse(localStorage.getItem("flashcards"));
        if (!savedFlashcards) return "";

        // clean up any bad entries
        const cleanedFlashcards = removeBadEntries(savedFlashcards);

        // create a new output to be loaded into text area
        let output = "";
        for (const line of cleanedFlashcards) {
            output += line.term + " - " + line.definition + "\n";
        }
        return output;
    });

    // save flashcards to local storage, send to parent
    function saveFlashcards() {
        // split by new line, then split by " - "
        const parsedFlashcards = userInput.split("\n").map(line => {
            const [term, definition] = line.split(" - ");
            return { term, definition };
        });

        // clean up any bad entries
        const cleanedFlashcards = removeBadEntries(parsedFlashcards);

        // add to local storage and send to flashcard viewer
        localStorage.setItem("flashcards", JSON.stringify(cleanedFlashcards));
        setFlashcards(cleanedFlashcards);
        returnToViewer();
    }

    // remove any flashcard entries with null or undefined terms
    function removeBadEntries(input) {
        return input.filter(card => card.term && card.definition);
    }

    return (
        <div className="creator">
            <textarea
                type="text"
                className="input"
                value={userInput}
                onChange={(input) => setUserInput(input.target.value)} />
            <button onClick={saveFlashcards}>Submit</button>
        </div>
    );
}
