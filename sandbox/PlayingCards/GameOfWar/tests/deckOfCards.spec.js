import { it, expect } from 'vitest';
import { DeckOfCards } from '../lib/deckOfCards';

it('DeckOfCards should have 52 cards', () => {
    const sut = new DeckOfCards();
    expect(sut.count).toBe(52);
});

it('DeckOfCards should have 51 cards after drawing one card', () => {
    const sut = new DeckOfCards();
    sut.draw();
    expect(sut.count).toBe(51);
});

it('DeckOfCards should have a PlayingCard when I draw a card from the deck', () => {
    const sut = new DeckOfCards();
    const topCard = sut.draw();
    expect(topCard.value).toBe('Ace');
});

it('DeckOfCards should have another PlayingCard when I draw the second card from the deck', ()=> {
    const sut = new DeckOfCards();
    sut.draw();
    const nextCard = sut.draw();
    expect(nextCard.value).toBe(2);
});

it.skip('DeckOfCards should have 13 cards per suit', () => {});

it.skip('DeckOfCards should have 4 cards of every value', () => {});

it.skip('DeckOfCards should have all cards in order for a fresh deck', () => {});

it('DeckOfCards should not have cards in order when shuffled', () => {
    const sut = new DeckOfCards();
    sut.shuffle();
    
});
