import { it, expect } from 'vitest';
import { PlayingCard } from '../lib/playingCard';

it('PlayingCard should have a value and suit', () => {
    const sut = new PlayingCard(2, 'hearts');
    expect(sut.value).toBe(2);
    expect(sut.suit).toBe('Hearts');
});

it('PlayingCard should express itself as a string', () => {
    const sut = new PlayingCard(2, 'hearts');
    expect(sut.toString()).toBe('2 of Hearts');
});

it.each(['Hearts', 'Diamonds', 'Spades', 'Clubs'])
('PlayingCard should accept the suit of %s', (given) => {
    const sut = new PlayingCard(3, given);
    expect(sut.suit).toBe(given);
});

it.each(['Heats', 'Club', 'Pokemon'])
('PlayingCard should reject %s as an invalid suit', (given) => {
    const act = () => new PlayingCard(4, given);
    expect(act).toThrow();
});

it.each([2, 3, 4, 5, 6, 7, 8, 9, 10])
('PlayingCard should accept the numeric value of %i', (givenValue) => {
    const sut = new PlayingCard(givenValue, 'clubs');
    expect(sut.value).toBe(givenValue);
});

it.each(['Ace', 'Jack', 'Queen', 'King'])
('PlayingCard should accept the text value of %s', (givenValue) => {
    const sut = new PlayingCard(givenValue, 'diamonds');
    expect(sut.value).toBe(givenValue);
});

it.each([
    { value: 1, name: 'Ace' },
    { value: 11, name: 'Jack' },
    { value: 12, name: 'Queen' },
    { value: 13, name: 'King' }
])
('PlayingCard should accept the number $value to equal $name', ({value, name}) => {
    const sut = new PlayingCard(value, 'hearts');
    expect(sut.value).toBe(name);
});

it.each([
    'One', 0, 14, 'Bob'
])
('PlayingCard should reject an invalid value %s', (badCardValue) => {
    const act = () => new PlayingCard(badCardValue, 'Hearts');
    expect(act).toThrow();
});

it('PlayingCard should correct the spelling of ace to Ace', () => {
    const sut = new PlayingCard('ace', 'hearts');
    expect(sut.value).toBe('Ace');
});
