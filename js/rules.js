
const rules = {
    player1Choices: [],
    player2Choices: [],

    turn: 0,

    player1Wins: 0,
    player2Wins: 0,

    checkWin: function (ar) {
        let result = false;

        if (
            ar.includes('1A') && ar.includes('1B') && ar.includes('1C') || 
            ar.includes('2A') && ar.includes('2B') && ar.includes('2C') ||
            ar.includes('3A') && ar.includes('3B') && ar.includes('3C') ||
            ar.includes('1A') && ar.includes('2A') && ar.includes('3A') || 
            ar.includes('1B') && ar.includes('2B') && ar.includes('3B') ||
            ar.includes('1C') && ar.includes('2C') && ar.includes('3C') ||
            ar.includes('1A') && ar.includes('2B') && ar.includes('3C') ||
            ar.includes('3A') && ar.includes('2B') && ar.includes('1C')
            ) {
            result = true
        }
        console.log(result);
        return result
        
    },

    reset: function () {
        this.player1Choices = [];
        this.player2Choices = [];
        this.turn = 0;
        $('.grid-items').removeClass('crosses')
        $('.grid-items').removeClass('naughts')
    }



}

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

