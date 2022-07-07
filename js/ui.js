const render = function () {

    console.log('is this working');
    $('#p1Wins').html(rules.player1Wins);
    $('#p2Wins').html(rules.player2Wins);

};

const clickHandler = function () {

    if( rules.turn % 2 === 0 ) {
        rules.player1Choices.push( $(this).attr('id') );
        $(this).addClass('crosses').off();
    } else {
        rules.player2Choices.push( $(this).attr('id') );
        $(this).addClass('naughts').off();
    }

    if ( rules.checkWin(rules.player1Choices) ) {
        rules.player1Wins += 1;
        render();
        alert(`Player 1 Wins!`);
        rules.reset();
        return
    }
        
    if ( rules.checkWin(rules.player2Choices) ) {
        rules.player2Wins += 1;
        render();
        alert(`Player 2 Wins!`);
        rules.reset();
        return
    }

    rules.turn += 1;
    console.log('Turn:', rules.turn)

    if ( rules.turn === 9 ) { 
        $("<h1 id='draw'>It's a Draw!</h1>").appendTo('#game');
        $('#draw').addClass('animate__animated animate__wobble');
        rules.reset();
    }

};

$(document).ready(function () {
    
    $('#title').addClass('animate__animated animate__tada animate__infinite');
    $('#player1').on('click', function () {
    });

    $('.grid-items').on('click', clickHandler);


});

// set the players to have an array of grid ID's
// render function updates the board to reflect both players arrays
///////////////////////////////////////////////

// 1. draw line on the winning combo
// 2. remove 'its a draw' message after resetting
// 3. make it so you have to click the player button before clicking on the board
// 4. make a reset button that resets everything including the win counter
// 5. 