const suits = ['C', 'D', 'H', 'S']; // Clubs, Diamonds, Hearts, Spades
const ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Muushig 32-card deck

let deck = [];
let playerHand = [];
let botHand = [];
let trumpCard = '';
let playerScore = 15;
let botScore = 15;
let isPlayerTurn = true;

