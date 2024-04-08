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

it.skip('PlayingCard should accept the numeric values of 2 through 10', () => {});

it.skip('PlayingCard should accept the text values of ace, jack, queen, and king', () => {});

it.skip('PlayingCard should accept the numeric equal to ace, jack, queen, and king', () => {});

it.skip('PlayingCard should reject an invalid value', () => {});

