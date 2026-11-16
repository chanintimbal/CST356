import { MemoryGame } from './MemoryGame.js';

const gameBoard = document.getElementById('gameBoard');
const gameTimer = document.getElementById('timer');
const cardTemplate = document.getElementById('gameCard');
const newGameButton = document.getElementById('newGame');

newGameButton.disabled = true;
const game = new MemoryGame(gameBoard, gameTimer, cardTemplate);

try {
    await game.ready;
    game.newGame(10);
    newGameButton.addEventListener('click', () => game.newGame(10));
    newGameButton.disabled = false;
} catch (error) {
    console.error('Unable to initialize the game:', error);
    alert('Unable to start the game. Check the browser console and reload the page.');
}