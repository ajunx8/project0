
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
        return result   
    },

    reset: function () {
        this.player1Choices = [];
        this.player2Choices = [];
        this.turn = 0;
        $('.grid-items').removeClass('crosses');
        $('.grid-items').removeClass('naughts');
        $('.grid-items').off().on('click', clickHandler)
    },

    resetAll: function () {
        rules.reset();
        rules.player1Wins = 0;
        rules.player2Wins = 0;
        render();
        $('#draw').remove();
    }

}