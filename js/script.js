const cards = document.querySelectorAll(".card");

let clickedCard = false;
let firstCard;
let secondCard;
let lock = false;

cards.forEach((card) => card.addEventListener("click", showCard));

function showCard() {
  // when there are 2 cards clicked or the card is already done or if user clicks same card twice return so no more cards can be clicked
  if (lock || this.classList.contains("done") || this === firstCard) return;
  // when card is clicked show class is added
  this.classList.add("show");

  if (!clickedCard) {
    // if its the first card that is clicked save it to firstcard and end function
    clickedCard = true;
    firstCard = this;
    return;
  }
  // if its the second card save it to secondcard
  secondCard = this;
  clickedCard = false;

  // if both cards clicked look for match
  checkCards();
}

function checkCards() {
  // check if both cards are same color if not reset cards
  if (secondCard.matches(`[data-color="${firstCard.dataset.color}"]`)) {
    disableCards();
  }
  resetCards();
}

function disableCards() {
  // if both cards are correct add done class
  firstCard.classList.add("done");
  secondCard.classList.add("done");
}

function resetCards() {
  // lock the board when 2 cards are clicked
  lock = true;
  // remove show from cards after small timeout
  setTimeout(() => {
    firstCard.classList.remove("show");
    secondCard.classList.remove("show");
    // unlock the board after timeout
    lock = false;
    // reset cards to null
    firstCard = null;
    secondCard = null;
  }, 1000);
}

(function randomDeck() {
  // give random style position to card so cards are random every reload
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
