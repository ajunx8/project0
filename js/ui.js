const render = function () {
    $('#p1Wins').html(rules.player1Wins);
    $('#p2Wins').html(rules.player2Wins);

};

const confirmResetAll = function () {
    if ( window.confirm(`\t\t\t\tARE YOU SURE?`) ) {
        return rules.resetAll();
    }
};

$(document).ready(function () {
    $('#title').addClass('animate__animated animate__tada animate__infinite');
    $('.grid-items').on('click', clickHandler);
    $('#reset-all').on('click', confirmResetAll);

});

const clickHandler = function () {
    $('#draw, #p1winphrase, #p2winphrase').remove();
    if( rules.turn % 2 === 0 ) {
        rules.player1Choices.push( $(this).attr('id') );
        $(this).addClass('crosses').off();
    } else {
        rules.player2Choices.push( $(this).attr('id') );
        $(this).addClass('naughts').off();
    }

    if ( rules.checkWin(rules.player1Choices) ) {
        console.log('p1 wins:', rules.player1Wins);
        rules.player1Wins += 1;
        render();
        $('audio#win1')[0].play()
        $("<h1 id='p1winphrase'>PLAYER 1 WINS</h1>").insertAfter('#reset-all');
        rules.reset();
        return
    }
        
    if ( rules.checkWin(rules.player2Choices) ) {
        console.log('p2 wins:', rules.player2Wins);
        rules.player2Wins += 1;
        render();
        $('audio#win2')[0].play();
        $("<h1 id='p2winphrase'>PLAYER 2 WINS</h1>").insertAfter('#reset-all');
        rules.reset();
        return
    }

    if ( rules.turn === 9 ) { 
        $("<h1 id='draw'>It's a Draw!</h1>").insertAfter('#reset-all');
        $('audio#draw-sound')[0].play()
        rules.reset();  
    }
    rules.turn += 1;  //// TURNS INCREASE BY 1 HERE
};