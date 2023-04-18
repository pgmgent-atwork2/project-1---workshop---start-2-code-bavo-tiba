const cards = document.querySelectorAll('.card');

let clickedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', showCard));

function showCard() {
    this.classList.toggle('show');

    console.log(this.getAttribute('data-color'))

    if (!clickedCard) {
      clickedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    clickedCard = false;

  checkCards();
};


function checkCards() {
  if (firstCard.getAttribute('data-color') === secondCard.getAttribute('data-color')) {
    disableCards();
  }
  resetCards();
};

function disableCards() {
  firstCard.removeEventListener('click', showCard);
  secondCard.removeEventListener('click', showCard);
};

function resetCards() {
  setTimeout(() => {
    firstCard.classList.toggle('show');
    secondCard.classList.toggle('show');
  }, 1500);
};