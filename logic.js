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

function getHumanChoice(){
    let answer = prompt("Please enter rock, paper or scissors !")
    return answer
}




function playGame(){
   
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()

    if (humanChoice == computerChoice){
        console.log("It is a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore+=1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
     else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore+=1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
     else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore+=1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
    else if (humanChoice == "scisssors" && computerChoice == "rock"){
        computerScore+=1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore+=1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
    
}

     for (let i=0; i<5; i++){
        let compSelection = getComputerChoice()
        let humanSelection  = getHumanChoice()
        playRound(humanSelection,compSelection)
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
}
playGame()



