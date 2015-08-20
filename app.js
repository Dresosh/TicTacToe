var turnCount = 0;
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button")
var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,5,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];

$(boxes).on("click", function(){
	if($(!this).html("")){
		if(turnCount % 2 === 0){
			$(this).html("X");
			$(this).addClass("clickedX");
		} else {
			$(this).html("O");
			$(this).addClass("clickedY");
		}
		checkWinner(this.innerHTML)
		turnCount++;
	} 	
});

$(button).on("click", function(){
	resetGame();
});


function resetGame(){
	$(".box").html("");
	$("#message").html("");
	$(".box").removeClass("clickedX");
	$(".box").removeClass("clickedY");
}

function checkWinner(player){
	for(var i = 0; i < winConditions.length; i++){
		if(boxes[winConditions[i][0]].innerHTML === player && boxes[winConditions[i][1]].innerHTML === player && boxes[winConditions[i][2]].innerHTML === player){
			$("#message").html("Player " + player + " wins");
		}
	}
}



