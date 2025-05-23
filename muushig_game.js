const suits = ["C", "D", "H", "S"];
const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
let playerHand = [];
let botHand = [];
let trumpCard = null;

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
  playerHand = [];
  botHand = [];
  for (let i = 0; i < 5; i++) {
    playerHand.push(deck.pop());
    botHand.push(deck.pop());
  }
  trumpCard = deck.pop();
}

function displayHands() {
  const playerDiv = document.getElementById("player-hand");
  const botDiv = document.getElementById("bot-hand");
  playerDiv.innerHTML = "";
  botDiv.innerHTML = "";

  for (const card of playerHand) {
    const img = document.createElement("img");
    img.src = `cards/${card}.png`;
    img.alt = card;
    playerDiv.appendChild(img);
  }

  for (const card of botHand) {
    const img = document.createElement("img");
    img.src = `cards/back.png`;
    img.alt = "Hidden";
    botDiv.appendChild(img);
  }
}

function displayTrump() {
  document.getElementById("trump").src = `cards/${trumpCard}.png`;
}

function startGame() {
  createDeck();
  shuffleDeck();
  dealCards();
  displayHands();
  displayTrump();
  console.log("Game started");
}

function performSwap() {
  alert("You clicked СОЛИХ");
}

function startPlay() {
  alert("You clicked ТОГЛО");
}
