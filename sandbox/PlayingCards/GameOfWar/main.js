import './style.css'
import { DeckOfCards } from './lib/deckOfCards';
import { PlayingCard } from './lib/playingCard';
const deck = new DeckOfCards();
deck.shuffle();
document.querySelector('button').addEventListener('click', () => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const card = deck.draw();
    const img = document.createElement('img');
    const file = card.toString().replaceAll(' ', '_') + '.png';
    img.src = `/cards/${file.toLowerCase()}`;
    li.appendChild(img);
    ul.appendChild(li);
});