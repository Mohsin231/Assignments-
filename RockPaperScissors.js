<html>
<head>
<title> JavaScript 4 </title>
</head>
<body>
<h1> Rock Paper Scissors </h1>
<input type="image" src="images/rock.jpg" onclick="rock_choice()" />
<input type="image" src="images/paper.jpg" onclick="paper_choice()" />
<input type="image" src="images/scissors.jpg" onclick="scissors_choice()" />

<p id="test"> </p>

<h2> JavaScript Questions </h2>
<ul>
<li> What benefit comes from breaking down the construction of bigger projects into smaller pieces? </li>
<p> You understand the construction of the whole code better and you could save more time. </p>

<li>Why did we constantly check and test our code? What could go wrong if we did not test our code thoroughly? </li>
<p> We check our code constantly to see if it works properly and to save more time; otherwise if we don't check our code, in the long run we will take a good amount time just trying to fix the problem within our code. </p>

<li>What would we need to add in order to make this game usable for 2 players instead of 1 player and 1 computer? Include pseudocode as part of your answer to assist in thinking about changing the project from PvC (player vs computer) to PvP (player vs player).</li>
<p> We would add another user input. In order for our ouput to change, each player must click on one picture (2 clicks) and it will display their results. </p>
</ul>
<script>

function rock_choice() {
var number = Math.floor(Math.random()*3+1);

	if (number ==1) {
	document.getElementById("test").innerHTML= "<h1> YOU: </h1> <img src='images/rock.jpg' /> <h1> COMPUTER: </h1><img src='images/rock.jpg' /><h1> TIE </h1>";}
		else if (number==2){
		document.getElementById("test").innerHTML="<h1> YOU: </h1> <img src='images/rock.jpg' /> <h1> COMPUTER: </h1><img src='images/paper.jpg' /><h1> LOSE </h1>";}
		else {
		document.getElementById("test").innerHTML = "<h1> YOU: </h1> <img src='images/rock.jpg' /> <h1> COMPUTER: </h1><img src='images/scissors.jpg' /><h1> WIN </h1>";}
		
		}

function paper_choice() {
	var number = Math.floor(Math.random()*3+1);
	
	if (number ==1) {
	document.getElementById("test").innerHTML= "<h1> YOU: </h1> <img src='images/paper.jpg' /> <h1> COMPUTER: </h1><img src='images/rock.jpg' /><h1> WIN </h1>";}
		else if (number==2){
		document.getElementById("test").innerHTML="<h1> YOU: </h1> <img src='images/paper.jpg' /> <h1> COMPUTER: </h1><img src='images/paper.jpg' /><h1> TIE </h1>";}
		else {
		document.getElementById("test").innerHTML = "<h1> YOU: </h1> <img src='images/paper.jpg' /> <h1> COMPUTER: </h1><img src='images/scissors.jpg' /><h1> LOSE </h1>";}
		}
function scissors_choice() {
	var number = Math.floor(Math.random()*3+1);

		if (number ==1) {	
	document.getElementById("test").innerHTML= "<h1> YOU: </h1> <img src='images/scissors.jpg' /> <h1> COMPUTER: </h1><img src='images/rock.jpg' /><h1> LOSE </h1>";}
		else if (number==2){
		document.getElementById("test").innerHTML="<h1> YOU: </h1> <img src='images/scissors.jpg' /> <h1> COMPUTER: </h1><img src='images/paper.jpg' /><h1> WIN </h1>";}
		else {
		document.getElementById("test").innerHTML = "<h1> YOU: </h1> <img src='images/scissors.jpg' /> <h1> COMPUTER: </h1><img src='images/scissors.jpg' /><h1> TIE </h1>";}
		}
</script>
</body>
</html>










//another way

const getUserChoice=userInput=>{
  userInput=userInput.toLowerCase();
  if(userInput==="rock"||userInput==="siccors"||userInput==="rock"||userInput==="bomb"){
return userInput;}
  else{return console.log("Choose a valid input")}
};

const getComputerChoice=()=>{
  const comp=Math.floor(Math.random()*3);
  if(comp==0){return "rock";}
  else if(comp==1){return "paper";}
  else{return "scissors"}
  
  
}
const determineWinner=(userChoice,computerChoice)=>{
  if (userChoice===computerChoice){
    return "Tie!";
  }
  if(userChoice==="bomb"){
    return "You won";
  }
  if(userChoice==="rock"){
    if(computerChoice==="paper"){
      return "computer wins";}
    else{return "you won";}
  }
  
  if(userChoice==="paper"){
    if(computerChoice==="scissors"){
      return "computer wins";}
    else {return "you won";}
    }
  
  if(userChoice==="scissors"){
    if(computerChoice==="rock"){
      return "computer wins";}
    else{return "you won";}
    }
  }

const playGame=()=>{
  let userChoice=getUserChoice("bomb");
  let computerChoice=getComputerChoice("paper");
  return determineWinner(userChoice,computerChoice);
}

console.log(playGame());
