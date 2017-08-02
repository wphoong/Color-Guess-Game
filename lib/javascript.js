var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeBtn();
	setupSquares();
	resetClick();
}

function setupModeBtn(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
      });
  }
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
	//add inital colors to squares
		squares[i].style.background = colors[i];
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
  	//grab color of clicked square
  		var clickedColor = this.style.background;
  		//compare color to pickedColor
  		console.log(clickedColor, pickedColor);
  		if(clickedColor === pickedColor){
  			message.textContent = "Correct";
  			changeColors(clickedColor);
  			h1.style.background = clickedColor;
  			resetButton.textContent = "PLAY AGAIN?";
  		}
  		else{
  			message.textContent = "TRY AGAIN!";
  			this.style.background = "#232323";
  		}
		});
	}
	reset();
}

function resetClick(){
	resetButton.addEventListener("click", reset);
}

function reset(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisp.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i =0; i<squares.length; i++){
		if(colors[i]) {
			squares[i].style.display="block";
		//change color to match winning color
		squares[i].style.background = colors[i];
  	} else {
  		squares[i].style.display="none";
  	}
  }
	//change background back to normal
	h1.style.background="steelblue";
}

function changeColors(color){
	//loop through all squares
	for(var i =0; i<squares.length; i++){
		//change color to match winning color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random color and push to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red from 0 to 255"
	var red = Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
