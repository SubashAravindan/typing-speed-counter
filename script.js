var parray=[ "To me, Messi is the greatest player in the world right now. He has got a fantastic vision of the game, and what he can do technically - it's just crazy. The things he can do with the ball - and at pace and top speed - is just amazing.",
			"When you face him you have to make decisions in an instant. When he approaches you, you have to make the sign of the cross and pray that everything will be alright.",
			"Leo is from another planet. What makes him the best is that other great players have had ups and downs, like Maradona. He wasn't half of what Leo is at Barca. Messi has had so many good years in his career that he deserves to be considered the best ever",
			"It's something for me that I can tell my kids that I've played against Messi when we watch him on television. For me he's got everything. He is magical to watch. When I finish and look back, and he will still be going strong",
			"Messi is the best, for me, Messi is God, he is the best and always will be - for what he has given the team and for how much he has made me enjoy being in the same team as him.",
			"Having him as a rival is complicated. You see game after game that it is impossible to take the ball off him, impossible to stop him. There are no words to decribe his talent. For me, and as others have said, he is from another planet.",
			"I have seen the player who will inherit my place in Argentine football and his name is Messi. Messi is a genius and he can become an even better player. His potential is limitless and I think he's got everything it takes to become Argentina's greatest player.",
			"The other day I saw one of his games. He was running with the ball at a hundred percent full speed, I don't know how many touches he took, maybe five or six, but the ball was glued to his foot. It's practically impossible.",
			"Messi is better than Maradona and Pele. Every week he shows that he is capable of things that no one had done until now. Messi defies the laws of anatomy, he must have an extra bone in his ankle.",
			"He's head and shoulders above anyone I've seen. He's an alien. He's better now than he was four years ago because he reads the game better. He's unstoppable.",
			"Look at Lionel Messi – he gets kicked every week. Everybody wants to kick Messi because it is the only way to stop him, but all he ever does is sort of smile, get up and get on with it, and then does it again."
			];
var span1=document.getElementById("1");
var span2=document.getElementById("2");
var span3=document.getElementById("3");
var bt=document.querySelector("button");
var ttext=document.querySelector("#targettext");
var input=document.querySelector("#input");
var gameOver=true;
var problemText;
var g;
var intervalId;
var timeDisplay=document.querySelector("#timer");
var speed=document.querySelector("#speed")

function displayTarget(count,flag) {
	

	span1.textContent="";
	span2.textContent=problemText[count];
	
	if (flag===true) {
		span2.classList.remove("wrong");
		span2.classList.add("correct");
	} else {
		span2.classList.add("wrong")
	}


	span3.textContent=problemText.slice(count+1,problemText.length)

}

function gameOv() {

	gameOver=true;
	span2.textContent="GAME OVER";
	input.value="";
	input.setAttribute("readonly","");
	clearInterval(intervalId);
	speed.classList.add("correct");

}

input.addEventListener("input",function () {

	if (input.value[input.value.length-1]===problemText[input.value.length-1]) {
		displayTarget(input.value.length-1,true);
		if (input.value.length===problemText.length) {
			gameOv();
		}

	} else {
		displayTarget(input.value.length-1,false);
		input.setAttribute("readonly","");
	}
	
})

window.addEventListener("keydown",function(){
	if (event.keyCode==8&&input.getAttribute("readonly")===""&&gameOver===false) {
		input.removeAttribute("readonly");
		
	}
	
})


function startTimer() {
	intervalId=setInterval(function () {
		var h=new Date;
		var timeElapsed = (h-g)/1000;
		timeDisplay.textContent="Time elapsed = "+ timeElapsed + "seconds";
		speed.textContent="Typing Speed " + input.value.length/timeElapsed + " characters/second";
	},500)
}


bt.addEventListener("click",function () {

	problemText=parray[Math.floor(Math.random()*10)];
	gameOver=false;
	span1.textContent=problemText;
	span2.textContent="";
	speed.classList.remove("correct");
	input.removeAttribute("readonly");
	g=new Date;
	startTimer();

})


	
