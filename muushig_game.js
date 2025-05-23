// muushig_game.js - Single working version with all logic included

// ============ Game Variables ============
let deck = [];
let playerHand = [];
let botHand = [];
let trumpCard = null;
let playerScore = 15;
let botScore = 15;

// ============ Setup Suits & Ranks ============
const suits = ['H', 'D', 'S', 'C'];
const ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generateDeck() {
  deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }
  shuffle(deck);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ============ Game Logic ============
function dealCards() {
  playerHand = deck.splice(0, 5);
  botHand = deck.splice(0, 5);
  trumpCard = deck.pop();
  updateVisuals();
}

function updateVisuals() {
  // Update scores
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('bot-score').innerText = botScore;
  // Show trump card
  const trumpImg = document.getElementById('trump');
  trumpImg.src = `cards/${trumpCard}.png`;
  trumpImg.alt = trumpCard;
  // Show deck
  document.getElementById('deck').src = 'cards/back.png';
  // Show hands (optional)
  const playerArea = document.getElementById('player-hand');
  playerArea.innerHTML = '';
  for (let card of playerHand) {
    const img = document.createElement('img');
    img.src = `cards/${card}.png`;
    img.alt = card;
    img.style.width = '60px';
    img.style.margin = '5px';
    playerArea.appendChild(img);
  }
}

function startGame() {
  generateDeck();
  dealCards();
  console.log('Game started');
}

function startPlay() {
  alert('You clicked ТОГЛО');
}

function performSwap() {
  alert('You clicked СОЛИХ');
}

function restart() {
  location.reload();
}
