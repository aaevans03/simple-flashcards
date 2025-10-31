import React from 'react';
import type { Flashcard } from './flashcard.tsx';
interface Props {
    setFlashcards: (flashcards: Flashcard[]) => void;
    returnToViewer: () => void;
}

export default function FlashcardCreator({ setFlashcards, returnToViewer }: Props) {

    const [userInput, setUserInput] = React.useState(() => {
        // load from local storage
        const flashcards = localStorage.getItem("flashcards");
        if (!flashcards) return "";


        // clean up any bad entries
        const cleanedFlashcards = removeBadEntries(savedFlashcards);
        // create a new output to be loaded into text area
        let output = "";
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

    function removeBadEntries(input: Flashcard[]) {
        return input.filter(card => card.term && card.definition);
    }

    function clearFlashcards() {
        setUserInput("");
        localStorage.removeItem("flashcards");
    }

    return (
        <div className="creator">
            <textarea
                // type="text"
                className="input"
                value={userInput}
                onChange={(input) => setUserInput(input.target.value)} />
            <div>
                <button onClick={saveFlashcards}>Submit</button>
                <button onClick={clearFlashcards}>Clear</button>
            </div>
        </div>
    );
}
