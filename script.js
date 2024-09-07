//This code is for only userChoice for Bat:

// function playGame(userChoice) {
//     // This will generate a number between 0 and 3
//     let randomNumber = Math.random() * 3;
//     let computerChoice;
//     if (randomNumber > 0 && randomNumber <= 1) {
//         computerChoice = 'Bat';
//     } else if (randomNumber > 1 && randomNumber <= 2) {
//         computerChoice = 'Ball';
//     } else {
//         computerChoice = 'Stump';
//     }

//     let resultMsg;
//     if (computerChoice === 'Ball') {
//         resultMsg = 'User won';
//     } else if (computerChoice === 'Bat') {
//         resultMsg = 'It\'s a tie';
//     } else if (computerChoice === 'Stump') {
//         resultMsg = 'Computer has won';
//     }

//     alert(`You have chosen ${userChoice}. Computer choice is ${computerChoice} and ${resultMsg}.`);
// }

//This code is for all userChoice Bat,Ball and Stump:

function playGame(userChoice) {
    // Generate a random number between 0 and 3
    let randomNumber = Math.random() * 3;
    let computerChoice;

    // Determine the computer's choice based on the random number
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    let resultMsg;

    // Determine the result message based on the choices
    if (userChoice === computerChoice) {
        resultMsg = 'It\'s a tie!';
    } else if (
        (userChoice === 'Bat' && computerChoice === 'Stump') ||
        (userChoice === 'Ball' && computerChoice === 'Bat') ||
        (userChoice === 'Stump' && computerChoice === 'Ball')
    ) {
        resultMsg = 'User won!';
    } else {
        resultMsg = 'Computer won!';
    }

    // Display the result to the user
    alert(`You have chosen ${userChoice}. Computer choice is ${computerChoice}. ${resultMsg}`);
}
