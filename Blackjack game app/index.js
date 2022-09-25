let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Sarthak",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstcard = getRandomNum()
    let secondcard = getRandomNum()
    sum = firstcard + secondcard
    cards = [firstcard, secondcard]
    renderGame()
}

function getRandomNum(){
    let temp = (Math.random()*13) + 1
    temp = Math.floor(temp)
    return temp
}

function renderGame() {  
    cardsEl.textContent = "Cards: "
    for(let i=0 ; i<cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You got Blackjack!!"
        hasBlackJack = true
    } else {
        message = "You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    if(isAlive===true && hasBlackJack===false){
        let nc = getRandomNum() //new card
        sum += nc
        cards.push(nc)
        renderGame()
    }
}