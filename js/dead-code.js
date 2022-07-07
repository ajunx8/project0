
// store the board grid in an object
// rows 1 to 3 starting from the TOP
// columns a to c starting from the LEFT
// two diagonals only: top left diag is X, top right diag is Y.

// const board = {
//     grid: ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'],
//     winners: [
//         ['1A', '1B', '1C'],
//         ['2A', '2B', '2C'],
//         ['3A', '3B', '3C'],
//         ['1A', '2A', '3A'],
//         ['1B', '2B', '3B'],
//         ['1C', '2C', '3C'],
//         ['1A', '2B', '3C'],
//         ['1C', '2B', '3A']
//     ],

//     player1choices: [ '2A', '3C', '1A', '2B'],
//     player2choices: [],

// };

// const checkWin = function () {

// }


// const arraysIdentical = function (winners, playerChoices) {
//     for (let i = 0; i < winners.length; i++) {
//         if ( winners[i].includes(playerChoices) ) {
            
//         } 
//     };
// };

// const checkWin = function () {
//     return console.log('Hello');

// };



// store player 1 choice in a variable depending on where they click in a 3 x 3 box on the website
// evaluate if player 1 wins with a function 
// store player 2 choice in a variable
// evaluate if player 2 wins with the same function

// repeat rules

// player 1 enter name
// player 2 enter name

// start button

// player 1 choose an option
// player 2 choose an option
// player 1 choose an option
// player 2 choose an option
// player 1 choose an option

// check win conditions
// if yes then end the game
    // else continue

// player 2 choose an option
// check win conditions

////////////////////////////////////////////////////////////////////

//ON START BUTTON PRESS
//RUN A FUNCTION
//THAT PROMTS PLAYER1 TO CLICK OK
//then allows all choices to be clicked and their classes changed to a naught
//then prompts player 2 to click OK
// allows choices to be clicked and class change to cross.

// run a for loop? for i = 0, i < 10, i++?

///////////////////////////////////////////////////////////////////

//if player has any of the winning arrays then the run win function that summons winning visuals and breaks the loop

////////////////////////////////////////////////////////////////////////////////
// const winners = [ ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'] ];
// const b = ['1', '2', '3'];

// const c = ['a', 'b', 'c'];

// const player1Choices = ['1', '4', '2', '8', '5']

// const arraysIdentical = function (winners, playerChoices) {
//     for (let i = 0; i < winners.length; i++) {

//         if ( playerChoices.includes(winners[i]) ) {
            
//         };
    

//     };
    
// };

// const isSubset = (playerChoices, winners) => winners.every(element => playerChoices.includes(element));

// console.log(isSubset(player1Choices, for (let i = 0; i < wi[5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// /////////////////////////////////////////////////////////////////////////////////////
// const array1 = ['1', '2', '3'];
// const array2 = []


// // element => array1.includes(element);
// const innerFunction = function (element) {
//     return array1.includes(element);
// }

// // (array1, array2) => array2.every( ... );

// const outerFunction = function (array1, array2) {
//     return array2.every( innerFunction(element) );
// }

//////////////////////////////////

// grid = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C']

// const winners = [
//     ['1A', '1B', '1C'],
//     ['2A', '2B', '2C'],
//     ['3A', '3B', '3C'],
//     ['1A', '2A', '3A'],
//     ['1B', '2B', '3B'],
//     ['1C', '2C', '3C'],
//     ['1A', '2B', '3C'],
//     ['1C', '2B', '3A']
// ];

// player1Choices = ['1A', '1B', '3B', '2B'];

// const player2Choices = ['1A', '2A', '1B', '3C', '1C']; 
// // 1A,1B,1C,2A,3C


// let newArray = []; // A,A,B,C,C
// for (let i = 0; i < player2Choices.length; i++) {
//     newArray.push( player2Choices[i][1] );
// };
// newArray.sort(); // 

// // const checkWin = function (playersChoices) {
// //     if (playerChoices.contains())
// // };

// const string = player1Choices.join('') // 1A1B3B2B = WIN

// /// if ( string.


//////////////////////////////////////////////////////////////////////////////////////////////////////
// const winners = [
//     ['1A', '1B', '1C'],
//     ['2A', '2B', '2C'],
//     ['3A', '3B', '3C'],
//     ['1A', '2A', '3A'],
//     ['1B', '2B', '3B'],
//     ['1C', '2C', '3C'],
//     ['1A', '2B', '3C'],
//     ['1C', '2B', '3A']
// ];

// test1 = ['1A', '1B', '3C', '1C']; //horizontal 1,1,1 win
// test2 = ['3A', '2A', '3B', '1A']; //vertical A,A,A win
// test3 = ['2B', '2C', '1A', '3C']; //diag 1A,2B,3C win
// test4 = ['2A', '2B', '1C', '2C']; //horizontal 2,2,2 win
// test5 = ['1A', '2B', '1C', '2C']; //lose
// test6 = ['2A', '1B', '2C', '3B']; //lose
// test7 = ['1A', '1B', '2B', '2A']; //lose



// const checkWin = function (playerChoicesArray) {

//     const ar = playerChoicesArray; //shorter name
//     ar.includes('1A')

//     if (ar.includes('1A') && ar.includes('1B') && ar.includes('1C')) {
//         return true
//     }
//     if (ar.includes('2A') && ar.includes('2B') && ar.includes('2C')) {
//         return true
//     }
//     if (ar.includes('3A') && ar.includes('3B') && ar.includes('3C')) {
//         return true
//     }
//     if (ar.includes('1A') && ar.includes('2A') && ar.includes('3A')) {
//         return true
//     }
//     if (ar.includes('1B') && ar.includes('2B') && ar.includes('3B')) {
//         return true
//     }
//     if (ar.includes('1C') && ar.includes('2C') && ar.includes('3C')) {
//         return true
//     }

//     if (ar.includes('1A') && ar.includes('2B') && ar.includes('3C')) {
//         return true
//     }
//     if (ar.includes('3A') && ar.includes('2B') && ar.includes('1C')) {
//         return true
//     }

//     return false
    
// }

// console.log(checkWin(test1));
// console.log(checkWin(test2));
// console.log(checkWin(test3));
// console.log(checkWin(test4));
// console.log(checkWin(test5));
// console.log(checkWin(test6));
// console.log(checkWin(test7));
// SORT with number and check against winners
// SORT with LETTERs and check against winners

// if ID 1A, 2B, 3C contains X then win. END.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const checkWin = function (playerChoicesArray) {


//     for (i = 0; i < winners.length; i++) {
//         const winningCombo = winners[i];

//         let winnerFound = true;

//         for (i = 0; i < winningCombo.length; i++) {
//             if ( !playerChoicesArray.includes(winningCombo[i]) ) {
//                 winnerFound = false;
//                 break
//             }
//         }
//         if ( winnerFound ) {
//             return true;
//         }
//     }


// };


// continue skips 1 iteration
// break stops the whole loop



/////////////////////////////////////////////////////////////
// make it X, if contains 3 X's or O's then win and stop
// want to check if test1(array1) contains winners[0](array2) return true 


////////////////////////////////////////////////////////////////////////////////////
// function checkElementsinArray(fixedArray,inputArray)
// {
//     var fixedArraylen = fixedArray.length;
//     var inputArraylen = inputArray.length;

//     if(fixedArraylen<=inputArraylen) {

//         for(var i=0;i<fixedArraylen;i++) {
//             if( !(inputArray.indexOf(fixedArray[i])>=0) ) {
//                 return false;
//             }
//         }

//     } else {
//         return false;
//     }

//     return true;
// }

// console.log(checkElementsinArray([1,2,3], [1,2,3]));
// console.log(checkElementsinArray([1,2,3], [1,2,3,4]));
// console.log(checkElementsinArray([1,2,3], [1,2]));

///////////////////////////////////////////////OLD WORK////////////////////////////////////////
// const winners = ['1', '2', '3']; //, ['4', '5', '6'], ['7', '8', '9'] ];
// const b = ['1', '2', '3'];

// const c = ['a', 'b', 'c'];

// const playerChoices = ['1', '4', '2', '8', '3']

// const arraysIdentical = function (winners, playerChoices) {
//     for (let i = 0; i < winners.length; i++) {

//         if ( playerChoices.includes(winners[i]) ) {
            
//         };
    

//     };
    
// };

// const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

/////////////////////////////////////////////////////////////////////////////////////
// const array1 = ['1', '2', '3'];
// const array2 = []


// // element => array1.includes(element);
// const innerFunction = function (element) {
//     return array1.includes(element);
// }

// // (array1, array2) => array2.every( ... );

// const outerFunction = function (array1, array2) {
//     return array2.every( innerFunction(element) );
// }

// test1 = ['1A', '1B', '3C', '1C']; //horizontal 1,1,1 win
// test2 = ['3A', '2A', '3B', '1A']; //vertical A,A,A win
// test3 = ['2B', '2C', '1A', '3C']; //diag 1A,2B,3C win
// test4 = ['2A', '2B', '1C', '2C']; //horizontal 2,2,2 win
// test5 = ['1A', '2B', '1C', '2C']; //lose
// test6 = ['2A', '1B', '2C', '3B']; //lose
// test7 = ['1A', '1B', '2B', '2A']; //lose

// console.log(rules.checkWin(test1));
// console.log(rules.checkWin(test2));
// console.log(rules.checkWin(test3));
// console.log(rules.checkWin(test4));
// console.log(rules.checkWin(test5));
// console.log(rules.checkWin(test6));
// console.log(rules.checkWin(test7));




// store player 1 choice in a variable depending on where they click in a 3 x 3 box on the website
// evaluate if player 1 wins with a function 
// store player 2 choice in a variable
// evaluate if player 2 wins with the same function

// repeat rules

// player 1 enter name
// player 2 enter name

// start button

// player 1 choose an option
// player 2 choose an option
// player 1 choose an option
// player 2 choose an option
// player 1 choose an option

// check win conditions
// if yes then end the game
    // else continue

// player 2 choose an option
// check win conditions

////////////////////////////////////////////////////////////////////

//ON START BUTTON PRESS
//RUN A FUNCTION
//THAT PROMTS PLAYER1 TO CLICK OK
//then allows all choices to be clicked and their classes changed to a naught
//then prompts player 2 to click OK
// allows choices to be clicked and class change to cross.

// run a for loop? for i = 0, i < 10, i++?

///////////////////////////////////////////////////////////////////

//if player has any of the winning arrays then the run win function that summons winning visuals and breaks the loop
