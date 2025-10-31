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

    
    function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()
    
    const result = document.querySelector("#result")
    
    if (humanChoice == computerChoice){
        result.textContent = "It is a tie!"
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore+=1;
        result.textContent= `You lose! ${computerChoice} beats ${humanChoice}.`
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
    }
     else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
    }
     else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore+=1;
        result.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`
    }
    else if (humanChoice == "scisssors" && computerChoice == "rock"){
        computerScore+=1;
        result.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore+=1;
        result.textContent=`You win! ${humanChoice} beats ${computerChoice}.`
    }

    const cscore =document.querySelector("#cscore")
    const hscore = document.querySelector("#hscore")

    cscore.textContent = `Computer Score: ${computerScore}`
    hscore.textContent =`Your Score: ${humanScore}`

    if (humanScore ==5 || computerScore ==5){
        if (humanScore>computerScore){
        result.textContent = "CONGRATULATIONS, YOU WON THE GAME!!!"}
        else {
            result.textContent ="SORRY, YOU LOST THE GAME. MAYBE NEXT TIME!"
        }
    }
    
}

    

    console.log(`Your Score ${humanScore}`)
    console.log(`Computers Score ${computerScore}`)
    if (humanScore > computerScore){
        console.log(" CONGRATULATIONS, YOU WON THE GAME!!!")
    }
    else if(humanScore < computerScore){
        console.log("SORRY, YOU LOST THE GAME. MAYBE NEXT TIME!")
    }
    else {
        console.log("IT IS A TIE!!!")
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







