const cards = document.querySelectorAll(".card");

let clickedCard = false;
let firstCard, secondCard;
let lock = false;

cards.forEach((card) => card.addEventListener("click", showCard));

function showCard() {
  // when there are 2 cards clicked return so no more cards can be clicked
  if (lock) return;
  // check if user doesn't click same card twice
  if (this === firstCard) return;
  // when card is clicked show class is added or removed
  this.classList.toggle("show");
  console.log(lock);
  console.log(this.getAttribute("data-color"));

  if (!clickedCard) {
    // if its the first card that is clicked save it to firstcard
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
  if (
    firstCard.getAttribute("data-color") ===
    secondCard.getAttribute("data-color")
  ) {
    disableCards();
  }
  resetCards();
}

function disableCards() {
  // if both correct cards are clicked disable eventListener
  firstCard.removeEventListener("click", showCard);
  secondCard.removeEventListener("click", showCard);
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
  }, 1500);
}


// clicking same card twice

// make the cards random
