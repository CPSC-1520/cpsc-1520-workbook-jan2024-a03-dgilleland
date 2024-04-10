import { toTitleCase } from "./stringUtils";

const PlayingCard = class {
    constructor(cardValue, cardSuit) {
        checkSuit(cardSuit);

        this.value = translateValue(cardValue);
        this.suit = toTitleCase(cardSuit);
    }
}

const translateValue = function(info) {
    if(typeof info === 'number') {
        if(info < 1 || info > 13)
            throw new Error(`${info} is not an acceptable card value`);
    } else if (typeof info === 'string') {
        const goodValues = /(ace|jack|queen|king)/i;
        if(info.search(goodValues) === -1)
            throw new Error(`${info} is not an acceptable card value`);
        info = toTitleCase(info);
    } else {
        throw new Error(`Can only create cards with values supplied as a string or number`);
    }
    
    if(info == 1) return 'Ace';
    if(info == 11) return 'Jack';
    if(info == 12) return 'Queen';
    if(info == 13) return 'King';
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