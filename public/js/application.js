// the game

$(document).ready(function() {

	// original position
	var position1 = 1;
	var position2 = 1;

	// restart game function
	function restart() {
		position1 = 1;
		position2 = 2;

		// $().removeClass('');
		$("#player1_strip > td.active").removeClass('active');
		$("#player1_strip > td.active").first().addClass('active');
		$("#player2_strip > td.active").removeClass('active');
		$("#player2_strip > td.active").first().addClass('active');

		// document.querySelector('').innerHTML();
		// def: Change the text of an element with id:
		document.querySelector('.result1').innerHTML = "Player 1's Position: " + position1;
		document.querySelector('.result2').innerHTML = "Player 2's Position: " + position2;
		document.querySelector('.winner').innerHTML = ""
	}

	// restart button function + restart game function
	$('button#1').click(function() {
		restart();
	});

// PRESS UP AND DOWN KEY
$(document).on('keydown', function(event) {

	// update_player_position function
	function update_player_position(player, position){
	if (player == 'player1'){
		// $().removeClass().next().addClass();}
		$("#player1_strip > td.active").removeClass('active').next().addClass('active');}
	else {
		$("#player2_strip > td.active").removeClass('active').next().addClass('active');}
	position = position + 1;
	return position;
	}

	// code status 
	var code = event.keyCode || event.which;

	// condition of code status 
	if (position1 == 12) {
		// document.querySelector().innerHTML = "" + ;
		// alert( "Winner: Player 1");
		// document.querySelector().innerHTML = "" ;
		document.querySelector('.result1').innerHTML = "Player 1's Position: " + position1;
		alert( "Winner: Player 1");
		document.querySelector('.winner').innerHTML = "Winner: Player 1" ;
	}
	else if (position2 == 12) {
		document.querySelector('.result2').innerHTML = "Player 2's Position: " + position2;
		alert( "Winner: Player 2");
		document.querySelector('.winner').innerHTML = "Winner: Player 2" ;
	}
// https://www.codecademy.com/courses/web-beginner-en-JwhI1/2/4?curriculum_id=50a3fad8c7a770b5fd0007a1
	else if(code == 38) {
		// position1 = update_player_position('player1', position1);
		// document.querySelector('').innerHTML = "" + ;
		position1 = update_player_position('player1', position1);
		document.querySelector('.result1').innerHTML = "Player 1's Position: " + position1 ;
	}

	else if(code == 40) {
		position2 = update_player_position('player2', position2);
		document.querySelector('.result2').innerHTML = "Player 2's Position: " + position2 ;

	}

	else { }
  	});
});