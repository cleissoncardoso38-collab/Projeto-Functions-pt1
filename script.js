const result = document.querySelector('.result')
const playerScore = document.querySelector('.player-score')
const machineScore = document.querySelector('.machine-score')

let playerScoreNumber = 0
let machineScoreNumber = 0

const playerOne = (playerchoice) => {

    playTheGame(playerchoice, playMachine())
}
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3)

    console.log(randonNumber)

    return choices[randonNumber]
}
const playTheGame = (player, machine) => {

    console.log('Humano: ' + player + ' Máquina :' + machine)

    if (player === machine) {
        result.innerHTML = "It was a Draw!"

    } else if ((player === 'paper' && machine === 'rock')
        || (player === 'rock' && machine === 'scissors')
        || (player === 'scissors' && machine === 'paper')
    ) {        
        playerScoreNumber++
        playerScore.innerHTML = playerScoreNumber    
        result.innerHTML = `You Win! &#x1F609`
       
    } 
        else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = `Sorry! You lose! &#x1F62D`
    }
}