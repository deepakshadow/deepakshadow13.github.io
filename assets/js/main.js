// btn clicking event for player one
let scoreOne = 0;
let scoreTwo = 0;
let gameOver = false;
let winner = $('#scoreLimit').text();
// for player 1 score 
$('#btnOne').on('click', function() {
    if (!gameOver) {
        scoreOne++; 
        if (scoreOne === Number(winner)) {
            gameOver = !gameOver;
            $('span#scorePlayerOne').addClass('winnerColor');
        }
        $('span#scorePlayerOne').text(scoreOne);
    }
})
// for paley 2 store
$('#btnTwo').on('click', function() {
    if (!gameOver) {
        scoreTwo++;
        if (scoreTwo === Number(winner)) {
            gameOver = !gameOver;
            $('span#scorePlayerTwo').addClass('winnerColor');
        }
        $('span#scorePlayerTwo').text(scoreTwo);
    }
});
// reset event
$('#reset').on('click', function() {
    resetFn();
})
// reset function
function resetFn() {
    scoreOne = 0;
    scoreTwo = 0;
    $('span#scorePlayerOne').text(scoreOne);
    $('span#scorePlayerTwo').text(scoreTwo);
    $('span#scorePlayerOne').removeClass('winnerColor');
    $('span#scorePlayerTwo').removeClass('winnerColor');
    gameOver = false;
}
// input
$('input[type="number"]').on('keypress', function(event) {
    if (event.which === 13) {
        let scoreLimit = $(this).val();
        $('#scoreLimit').text(scoreLimit);
        winner = Number(scoreLimit);
        $(this).val('');
    }
})
// hide the input
$('#change').on('click', function() {
    $('input[type="number"]').fadeToggle(400);
})