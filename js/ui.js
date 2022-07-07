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
    $('#draw').remove()
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
        alert(`\t\t\t\t\tPLAYER 1 Wins!`);
        rules.reset();
        return
    }
        
    if ( rules.checkWin(rules.player2Choices) ) {
        console.log('p2 wins:', rules.player2Wins);
        rules.player2Wins += 1;
        render();
        $('audio#win2')[0].play()
        alert(`\t\t\t\t\tPLAYER 2 Wins!`);
        rules.reset();
        return
    }

    rules.turn += 1;
    console.log('Turn:', rules.turn)

    if ( rules.turn === 9 ) { 
        $("<h1 id='draw'>It's a Draw!</h1>").appendTo('#game');
        $('audio#draw-sound')[0].play()
        rules.reset();
        
    }

};