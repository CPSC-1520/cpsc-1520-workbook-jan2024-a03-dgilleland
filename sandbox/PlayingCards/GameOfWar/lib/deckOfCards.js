import { PlayingCard } from "./playingCard";
const DeckOfCards = class {
    constructor() {
        // Set up a full deck of cards
        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

        for(var suit of suits)
            for(var count = 1; count <= 13; count++)
                this.#cards.push(new PlayingCard(count, suit));
    }
    #cards = [];
    get count() {
        return this.#cards.length;
    }
    draw() {
        const card = this.#cards.shift();
        return card;
    }
    shuffle() {
        for(var count = 0; count < 99999; count++) {
            const index = pick(this.count);
            const card = this.#cards.splice(index, 1)
            this.#cards.push(card[0]);
        }
    }
}

const pick = function(max) {
    return Math.floor(Math.random() * 10000000) % max;
}

export { DeckOfCards }
