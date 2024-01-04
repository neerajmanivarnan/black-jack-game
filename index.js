let firstCard
let secondCard
let cards = []

let sum = 0

let hasBlackJack = false;
let isAlive=false;


let message=""

let mesEl = document.getElementById("mes")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
     firstCard = getRandom()
     secondCard = getRandom()
     isAlive = true
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()

}

function renderGame(){
    
         //cardsEl.textContent  = cards
         cardsEl.textContent=""
         for(let i=0;i<cards.length;i+=1){
 
             cardsEl.textContent  += cards[i] +"  "
         }
     
     // cardsEl.textContent = firstCard +" : " + secondCard
     displaySum()
     if (sum<21){
         // console.log("Do you want to draw a new card ?");
         message = "Do you want to draw a new card ?"
         reset()
         
     }else if(sum === 21){
         // console.log("You got a blackJack");
         message = "You got a blackJack!"
         // sumEl.textContent = sum 
         hasBlackJack = true;
         reset()
     }else{
         // console.log("out");
         isAlive=false;
         // sumEl.textContent = sum 
         message = "Sorry sir ! You are out of the game."
         reset()
     
     }
     displayMsg()
    
       
}


function reset(){
    let resetEl = document.querySelector("#start-btn")
    resetEl.textContent = "Start new game"
}

function displayMsg(){
    mesEl.textContent=message
}

function displaySum(){
    sumEl.textContent = sum
}



function newCard(){

    if(isAlive===true && hasBlackJack ===false){
        let Newcard = getRandom()
    cards.push(Newcard)
    sum += Newcard
    // displayMsg()
    // displaySum()
    renderGame()
    }

    
    
}

function getRandom(){
    let c = (Math.random()*13)
    let y = Math.floor(c)+1
    if(y == 1){
        y = 11
    }else if(y>10){
        y = 10
    }

    return y
}

