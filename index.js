var suit = ["spades", "hearts", "clubs", "diamonds"];
var value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var CardValueMap = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }

let playerCard = playerDeck[i];
let computerCard = computerDeck[i];
class Player {
    constructor(name) {
        this.name = name;
    }
}



class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}


class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
    return this.cards.length;
}

    shuffle() { 
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }    
    }
}

let deck = new Deck();
console.log(deck.cards);

function freshDeck() {
    return suit.map(suit => {
        return value.map(value => {
            return new Card(suit, value)
        });
    });
}

let playerDeck, computerDeck, stop;

startGame()
    function startGame() {
        const deck = new Deck();
        deck.shuffle();

        var deckMidpoint = deck.numberOfCards / 2;
        playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
        computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
        stop = false;

        console.log(playerDeck);
        console.log(computerDeck);

    }

    function isRoundWinner(cardOne, cardTwo) {
        return CardValueMap[cardOne.value] > CardValueMap[cardTwo.value];
       
    }

if (isRoundWinner(playerCard, computerCard)) {
        console.log ("Win");
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
    } else if (isRoundWinner(comuterCard, playerCard)) {
        console.log("Lose");
        computerDeck.push(computerCard);
        computerDeck.push(playerCard);
    } else {
        console.log("Draw");
        playerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }

    if (isGameOver(playerDeck)) {
        console.log("You Lose");
        stop = true;
    } else if (isGameOver(computerDeck)) {
        console.log("You Win");
    }

    function isGameOver(deck) {
        return deck.numberOfCards === 0;
    }


let name = new Player('Player1');









    /*class PlayerScore {
        constructor() {
        this.playerScore = " ";
        }
    }
    
    class PlayGame {
        constructor(){
    
        }
    
        startGame(player1, player2) { 
        let deck = new Deck();
        deck.shuffle();
        } 
    
        playGame(player1, player2) {
     
        for (let i = 0; i < player1.deck.length; i++) {
            console.log(`${player1} vs ${player2}: round ${i}`);
          if (cardValueMap[player1.deck[i].value] > cardValueMap[player2.deck[i].value]) {
            player1.playerScore += 1;
            console.log(`${player1.name} has won this round`);
          } else if (cardValueMap[player1.deck[i].value] < cardValueMap[player2.playerDeck[i].value]) {
            player2.playerScore += 1;
            console.log(`${player2.name} has won this round`);
          } else {
            console.log("This round is a tie");
                    }
                }
            }  
        }  
    
    let player1 = new Player('Player 1');
    let player2 = new Player('Player 2');
    
    let playGame = new PlayGame();
    playGame.startGame(player1, player2);*/