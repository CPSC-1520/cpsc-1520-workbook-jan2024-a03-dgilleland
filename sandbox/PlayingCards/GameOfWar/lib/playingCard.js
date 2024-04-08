import { toTitleCase } from "./stringUtils";

const PlayingCard = class {
    constructor(cardValue, cardSuit) {
        checkSuit(cardSuit);

        this.value = translateValue(cardValue);
        this.suit = toTitleCase(cardSuit);
    }
}

const translateValue = function(info) {
    if(info == 1) return 'Ace';
    return info;
}

const checkSuit = function(info) {
    const goodValues = /(hearts|clubs|diamonds|spades)/i;
    if(info.search(goodValues) === -1) {
        throw new Error(`${info} is not a valid suit`);
    }
}

PlayingCard.prototype.toString = function() {
    return `${this.value} of ${this.suit}`;
}

export { PlayingCard }