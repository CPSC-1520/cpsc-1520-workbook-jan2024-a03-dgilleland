import { toTitleCase } from "./stringUtils";

const PlayingCard = class {
    constructor(cardValue, cardSuit) {
        this.value = cardValue;
        this.suit = toTitleCase(cardSuit);
    }
}

PlayingCard.prototype.toString = function() {
    return `${this.value} of ${this.suit}`;
}

export { PlayingCard }