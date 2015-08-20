var turnCount = 0;
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button")
var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,5,8],[0,3,6],[1,4,7],[2,5,8]];

$(boxes).on("click", function(){
	$(this).on("click", function(){
		if($(this).html("")){
			$(this).html("x");
		}
	});
});

$(button).on("click", function(){
	resetBoard();
});
 

function resetBoard(){
	$(".box").html("");
}

function checkWinner(player){
	for(var i = 0; i < winConditions.length; i++){
		if(boxes[winConditions[i][0]].innerHTML === player && boxes[winConditions[i][1]].innerHTML === player && boxes[winConditions[i][2]].innerHTML === player){
			console.log(player + " wins!");
		}
	}
}



	// if(!this.innerHTML){
	// 	if(turnCount % 2 === 0){
	// 		this.innerHTML = "X";
	// 	} else {
	// 		this.innerHTML = "O";
	// 	}
	// 	checkWinner(this.innerHTML)
	// 	turnCount++;
	// } 	
