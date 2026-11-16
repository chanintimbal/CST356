import { Piano } from './piano.js';

const myPiano = new Piano();
console.log(myPiano.getDescription());
console.log(myPiano.practice());
console.log(myPiano['#color']); // private