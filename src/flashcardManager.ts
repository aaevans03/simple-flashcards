import type { Flashcard } from "./flashcard";

// Flashcard manager functions for loading, parsing, and cleaning flashcard data from local storage

// remove any flashcard entries with null or undefined terms
export function removeBadEntries(input: Flashcard[]) {
    return input.filter(card => card.term && card.definition);
}

export function loadParseFlashcards() {
    // get flashcards from localStorage, if none return with empty array
    const flashcards = localStorage.getItem("flashcards");
    if (!flashcards) return [];
    
    // parse flashcards, remove any bad entries and return
    let parsedFlashcards: Flashcard[];
    try {
        parsedFlashcards = JSON.parse(flashcards);
        return removeBadEntries(parsedFlashcards);
    } catch (TypeError) {
        return [];
    }
}
