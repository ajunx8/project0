console.log('is this script on');

const render = function () {

    console.log('is this working');
    $('#p1Wins').html(rules.player1Wins);
    $('#p2Wins').html(rules.player2Wins);

};

$(document).ready(function () {
    
    $('#player1').on('click', function () {
        
    });

    $('.grid-items').on('click', function () {

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
        }
            
        if ( rules.checkWin(rules.player2Choices) ) {
            rules.player2Wins += 1;
            render();
            alert(`Player 2 Wins!`);
            rules.reset();
        }

        rules.turn += 1;

        if ( rules.turn === 9 ) { 
            $("<h1>It's a Draw!</h1>").appendTo('#game');
        }

    });


});

// set the players to have an array of grid ID's
// render function updates the board to reflect both players arrays
///////////////////////////////////////////////
//
// for (let i = 0; i < rules.player1Choices.length; i++) {
//     $( `#${ rules.player1Choices[i] }` ).addClass('crosses');
// }; 

// for (let i = 0; i < rules.player2Choices.length; i++) {
//     $( `#${ rules.player2Choices[i] }` ).addClass('naughts');
// }; 