var character = document.getElementById("character");
var block = document.getElementById("block");
var board = document.getElementById("board");
var counter = 0;
var games = 1;

function jump(){
	 if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
if(getCookie("hscore") == ""){
	setCookie("hscore",0,1);
}
var chechDead = setInterval(function(){
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
	if(blockLeft<20 && blockLeft > -20 && characterTop>=130){
		block.style.animation = "none";
			//block.style.animation = "block 1s infinite linear";
			board.innerHTML = board.innerHTML + games +". " + Math.floor(counter/100) + "<br>";
			if(parseInt(getCookie("hscore")) < Math.floor(counter/100)){
				setCookie("hscore",Math.floor(counter/100),1);
			}
			document.getElementById("spancon").innerHTML = "Highscore: " + getCookie("hscore") + " | Game Over.  Score: "+Math.floor(counter/100);
			counter = 0;games++;
			clearInterval(chechDead);
	}else{
		counter++;
		document.getElementById("spancon").innerHTML = "Score: " + Math.floor(counter/100);
	}
	
},10);

var rerole = function(){
	
	var i = 3;
	var starting = setInterval(()=>{
		//console.log("Hi",i);
		document.getElementById("spancon").innerHTML = i;
		i--;
		if(i==-1){document.getElementById("spancon").innerHTML = "Go..";clearInterval(starting);}
	},1000);
	setTimeout(()=>{
		block.style.animation = "block 1s infinite linear";
		var chechDead = setInterval(function(){
			let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
			let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
		
			if(blockLeft<20 && blockLeft > -20 && characterTop>=130){
				block.style.animation = "none";
				//block.style.animation = "block 1s infinite linear";
				board.innerHTML = board.innerHTML + games +". " + Math.floor(counter/100) + "<br>";
				if(parseInt(getCookie("hscore")) < Math.floor(counter/100)){
					setCookie("hscore",Math.floor(counter/100),1);
				}
				document.getElementById("spancon").innerHTML = "Highscore: " + getCookie("hscore") + " | Game Over.  Score: "+Math.floor(counter/100);
				counter = 0;games++;
				clearInterval(chechDead);
			}else{
				counter++;
				document.getElementById("spancon").innerHTML = "Score: " + Math.floor(counter/100);
			}
			
		},10);
	},4000);
};
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

