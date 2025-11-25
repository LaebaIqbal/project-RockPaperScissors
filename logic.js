let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice == 0){
        return "rock"
    }
    else if (compChoice == 1){
        return "paper"
    }
    else {
        return "scissors"
    }
 }

const result = document.querySelector("#result")
const playerChoice = document.querySelector("#playerChoice")
const compChoice = document.querySelector("#compChoice")
const choice = document.querySelectorAll(".choice")
const cscore =document.querySelector("#cscore")
const hscore = document.querySelector("#hscore")
const restartMessage = document.querySelector("#result2")
const res = document.querySelectorAll(".res")

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()
    
    if (humanChoice == computerChoice){
        if(humanChoice=="rock"){
           choice.forEach(choice =>{
            choice.textContent="✊"
           })
        }
        else if(humanChoice=="paper"){
            choice.forEach(choice =>{
            choice.textContent="🤚"
           })
        }
        else{
           choice.forEach(choice =>{
            choice.textContent="✌️"
           }) 
        }
        result.textContent = "It is a tie!"
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore+=1;
        result.textContent= `You lose! ${computerChoice} beats ${humanChoice}.`
        playerChoice.textContent ="✊"
        compChoice.textContent ="🤚"
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
        playerChoice.textContent ="✊"
        compChoice.textContent ="✌️"

    }
     else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
        playerChoice.textContent ="🤚"
        compChoice.textContent ="✊"
    }
     else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore+=1;
        result.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`
        playerChoice.textContent ="🤚"
        compChoice.textContent ="✌️"
    }
    else if (humanChoice == "scisssors" && computerChoice == "rock"){
        computerScore+=1;
        result.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`
        playerChoice.textContent ="✌️"
        compChoice.textContent ="✊"
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
        playerChoice.textContent ="✌️"
        compChoice.textContent ="🤚"
    }

    cscore.textContent = `Computer Score: ${computerScore}`
    hscore.textContent =`Your Score: ${humanScore}`

    if (humanScore ==5 || computerScore ==5){
        if (humanScore>computerScore){
        result.textContent = "🎊CONGRATULATIONS, YOU WON THE GAME!🎊"}
        else {
            result.textContent ="SORRY, YOU LOST THE GAME. MAYBE NEXT TIME😔!"
        }
        
        restartMessage.textContent = "Press RESTART GAME to play another Round!"
        disableButton()
    }
    
}

function restartGame(){
    res.forEach(res=>{
        res.textContent = "";
    })
    choice.forEach(choice=>{
        choice.textContent="";
    })
    enableButton()
    humanScore = 0;
    computerScore = 0;

    cscore.textContent = `Computer Score: ${computerScore}`
    hscore.textContent =`Your Score: ${humanScore}`
    
}

function disableButton(){
    const btn = document.querySelectorAll(".gameButton").forEach(btn =>{
    btn.disabled = true;
    })
}

function enableButton(){
    const btn = document.querySelectorAll(".gameButton").forEach(btn =>{
    btn.disabled = false;
    })

}

const r = document.querySelector("#r")
r.addEventListener("click",()=> {
    const compChoice = getComputerChoice()
    playRound("rock",compChoice)
})

const p = document.querySelector("#p")
p.addEventListener("click",()=> {
    const compChoice = getComputerChoice()
    playRound("paper",compChoice)
})

const s = document.querySelector("#s")
s.addEventListener("click",()=> {
    const compChoice = getComputerChoice()
    playRound("scissors",compChoice)
})

const restart = document.querySelector("#restart")
restart.addEventListener("click",()=>{
    restartGame()})








