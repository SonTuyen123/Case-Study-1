var dealerSum = 0;
var youSum = 0;
var dealerAceCount = 0;
var youAceCount = 0;
var hidden;
var deck;
var canHit = true;
window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}

//tạo ra bộ bài gán vào deck
function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    console.log(deck);
}

//trộn bài
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    // console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    //chia bài cho nhà cái nhưng phải có gái trị > 17
    while (dealerSum < 17) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);
     //chia 2 quân bài cho mình
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        youSum += getValue(card);
        youAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }
    console.log(youSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);

}
//rut bài
function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    youSum += getValue(card);
    youAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);
    //check xem điểm của your > 21 thì canHit false k cho hit nữa
    if (reduceAce(youSum, youAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
    }
}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    youSum = reduceAce(youSum, youAceCount);
    canHit = false;
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    let message = "";
    if (youSum > 21) {
        message = "You Lose !";
    } else if (dealerSum > 21) {
        message = "You win !";
    }
    //both you and dealer <= 21
    else if (youSum == dealerSum) {
        message = "Tie !";
    } else if (youSum > dealerSum) {
        message = "You Win !";
    } else if (youSum < dealerSum) {
        message = "You Lose !";
    }
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = youSum;
    document.getElementById("results").innerText = message;
}
//tính ra giá trị quân bài
function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}
// check Ace trong deck
function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}
