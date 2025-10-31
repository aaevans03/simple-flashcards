import './app.css';

export interface Flashcard {
    term: string;
    definition: string;
}

interface Props {
    card: Flashcard;
    flipCard: () => void;
    flipped: boolean;
}

export function Flashcard({card, flipCard, flipped}: Props) {
    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={flipCard}>
            {flipped ? card.definition : card.term}
        </div>
    );
}
