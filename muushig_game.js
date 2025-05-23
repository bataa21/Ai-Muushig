// ==============================
// Muushig 2-Player Game Logic
// ==============================

// --- Global Variables ---
const suits = ['C', 'D', 'H', 'S']; // Clubs, Diamonds, Hearts, Spades
const ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let playerHand = [];
let botHand = [];
let trumpCard = null;
let playerScore = 15;
let botScore = 15;

// --- Utility Functions ---

// Create a standard 32-card deck
function createDeck() {
  deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }
}

// Shuffle the deck using Fisher-Yates algorithm
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Deal 5 cards to each player and set the trump card
function dealCards() {
  playerHand = deck.splice(0, 5);
  botHand = deck.splice(0, 5);
  trumpCard = deck.pop();
}

// --- UI Update Functions ---

// Update the scores displayed on the page
function updateScores() {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('bot-score').innerText = botScore;
}

// Display the player's hand
function displayPlayerHand() {
  const playerHandDiv = document.getElementById('player-hand');
  playerHandDiv.innerHTML = '';
  for (const card of playerHand) {
    const img = document.createElement('img');
    img.src = `cards/${card}.png`;
    img.alt = card;
    img.classList.add('card');
    playerHandDiv.appendChild(img);
  }
}

// Display the bot's hand (cards face down)
function displayBotHand() {
  const botHandDiv = document.getElementById('bot-hand');
  botHandDiv.innerHTML = '';
  for (let i = 0; i < botHand.length; i++) {
    const img = document.createElement('img');
    img.src = 'cards/back.png';
    img.alt = 'Card Back';
    img.classList.add('card');
    botHandDiv.appendChild(img);
  }
}

// Display the trump card
function displayTrumpCard() {
  const trumpImg = document.getElementById('trump');
  trumpImg.src = `cards/${trumpCard}.png`;
  trumpImg.alt = trumpCard;
}

// --- Game Control Functions ---

// Initialize and start a new game
function startGame() {
  createDeck();
  shuffleDeck();
  dealCards();
  updateScores();
  displayPlayerHand();
  displayBotHand();
  displayTrumpCard();
  console.log('New game started.');
}

// Handle the play action
function startPlay() {
  alert('Play action triggered.');
  // Implement play logic here
}

// Handle the swap action
function performSwap() {
  alert('Swap action triggered.');
  // Implement swap logic here
}

// --- Event Listeners ---

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners to buttons
  document.getElementById('start-button').addEventListener('click', startGame);
  document.getElementById('play-button').addEventListener('click', startPlay);
  document.getElementById('swap-button').addEventListener('click', performSwap);

  // Automatically start a new game on page load
  startGame();
});
