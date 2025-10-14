import React from 'react';

export default function FlashcardCreator({ setFlashcards, returnToViewer }) {

    const [userInput, setUserInput] = React.useState(() => {
        const savedFlashcards = JSON.parse(localStorage.getItem("flashcards"));
        if (!savedFlashcards) return "";
        let output = "";
        for (const line of savedFlashcards) {
            // TODO: fix blank lines being added
            // console.log(line);
            output += line.term + " - " + line.definition + "\n";
        }
        // console.log(output);
        return output;
    });

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
        // TODO: remove blank lines, nulls/undefineds
        localStorage.setItem("flashcards", JSON.stringify(parsedFlashcards));
        setFlashcards(parsedFlashcards);
        returnToViewer();
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
