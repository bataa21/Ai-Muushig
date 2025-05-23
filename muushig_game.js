// ==============================
// Muushig 2-Player Game Logic
// ==============================

// --- Global Variables (from globals.js) ---
// suits, ranks, deck, playerHand, botHand, trumpCard, playerScore, botScore, isPlayerTurn

// --- Utility Functions ---
function createDeck() {
  deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards() {
  playerHand = deck.splice(0, 5);
  botHand = deck.splice(0, 5);
  trumpCard = deck.pop();
}

function updateScores() {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('bot-score').innerText = botScore;
}

function displayPlayerHand() {
  const playerHandDiv = document.getElementById('player-hand');
  playerHandDiv.innerHTML = '';
  playerHand.forEach((card, i) => {
    const img = document.createElement('img');
    img.src = `cards/${card}.png?v=${Date.now()}`;
    img.alt = card;
    img.classList.add('card');
    img.addEventListener('click', () => playerPlaysCard(i));
    playerHandDiv.appendChild(img);
  });
}

function displayBotHand() {
  const botHandDiv = document.getElementById('bot-hand');
  botHandDiv.innerHTML = '';
  botHand.forEach(() => {
    const img = document.createElement('img');
    img.src = 'cards/back.png?v=' + Date.now();
    img.alt = 'Hidden';
    img.classList.add('card');
    botHandDiv.appendChild(img);
  });
}

function displayTrumpCard() {
  const trumpImg = document.getElementById('trump');
  trumpImg.src = `cards/${trumpCard}.png?v=${Date.now()}`;
  trumpImg.alt = trumpCard;
}

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

function performSwap() {
  alert("Swap logic will go here.");
}

function startPlay() {
  alert("Click a card to play it.");
  isPlayerTurn = true;
}

function playerPlaysCard(index) {
  if (!isPlayerTurn) return;

  const playerCard = playerHand.splice(index, 1)[0];
  const botCard = botHand.splice(Math.floor(Math.random() * botHand.length), 1)[0];

  alert(`You played ${playerCard}, Bot played ${botCard}`);

  // Compare simple ranks only (e.g., "9H" vs "7S")
  const playerRank = ranks.indexOf(playerCard[0]);
  const botRank = ranks.indexOf(botCard[0]);

  if (playerRank > botRank) {
    botScore--;
    alert("You win the trick!");
  } else {
    playerScore--;
    alert("Bot wins the trick.");
  }

  updateScores();
  displayPlayerHand();
  displayBotHand();
  checkForGameEnd();

  isPlayerTurn = false;
}


function checkForGameEnd() {
  if (playerScore <= 0) {
    alert("Player loses the match!");
  } else if (botScore <= 0) {
    alert("Bot loses the match! You win!");
  }
}

// Auto-run game setup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-button').addEventListener('click', startGame);
  document.getElementById('play-button').addEventListener('click', startPlay);
  document.getElementById('swap-button').addEventListener('click', performSwap);
  startGame();
});
