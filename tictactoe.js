const readlineSyne = require("readline-sync");
console.log('*****Tic Tac Toe Game*****');

const gameBoard = [];
let userLetter = '';
let computerLetter = '';

startGame();
playerMove();
moveAtPosition();
printBoard();

function moveAtPosition(){
    const position = readlineSyne.question('Where do you wanna make move?...Choose any empty position [1-9] : ');
    console.log('Position of your choice : ' + position);
    if(position > 9 || position < 1){
        console.log('Invalid Position...choose again');
        moveAtPosition();
    }
    else if(gameBoard[position] != undefined){
        console.log('Position is taken...choose again');
        moveAtPosition();
    }
    else{
        gameBoard[position] = userLetter;
    }

}

function playerMove(){
    const move = readlineSyne.question('It`s your turn...type X or O : ');
    //console.log('Your move : ' + move);
    if(move === 'X' || 'x'){
        userLetter = 'X';
        computerLetter = 'O';
        
    }
    else if(move === 'O' || 'o'){
        userLetter = 'O';
        computerLetter = 'X';
        
    }
    else{
        console.log('Invalid Move!');
    }
}

function printBoard(){
    console.log('***Game Board***');
    console.log('---------------------------------');
    let i = 1;
    do{
        console.log();
        i = i + 3;
    }while(i<10)
    console.log('---------------------------------');
}

function startGame(){
    let gameBoard = [10];
    for(let index = 0; index < 10; index++){
        gameBoard[index] = ' ';
    }
}
