
var cards = [{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
}, {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
}, {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-hearts.png"
}];

var cardsInPlay = [];

const checkForMatch = () => {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

const reset = () => {
  cardsInPlay = [];
  let imgs = document.getElementById('game').getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', 'images/back.png');
  }
}

const flipCard = (e) => {
  var cardID = e.target.getAttribute('data-id');
  console.log(cards[cardID].rank);
  e.target.setAttribute('src', cards[cardID].cardImage);
  cardsInPlay.push(cards[cardID]);
  if (cardsInPlay.length >= 2) {

    setTimeout(()=> {
      checkForMatch();
      reset();
    }, 20);
  }

}

const createBoard = () => {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game').appendChild(cardElement);
  }
}

createBoard();
