const cards = document.querySelectorAll(".card");

let clickedCard = false;
let firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", showCard));

function showCard() {
  // when card is clicked show class is added or removed
  this.classList.toggle("show");

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
}

function resetCards() {
  // remove show from cards after small timeout
  setTimeout(() => {
    firstCard.classList.toggle("show");
    secondCard.classList.toggle("show");
  }, 1500);
}

// todo ability to click more than two cards

// clicking same card twice

<<<<<<< HEAD
// make the cards random
=======
// make the cards random
>>>>>>> b92e6d0d3001110c8392c0bc6e17943aa09041dc
