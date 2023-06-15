function buttonClicked(char){
	var screen = document.getElementById("screen");
	if(screen.innerHTML == "0"){
		screen.innerHTML = char;
	}
	else{
		screen.innerHTML += char;
	}
}

function clearScreen( ){
	var screen = document.getElementById("screen");
	screen.innerHTML = "0";
}

	var number0f0peratorButton = document.getElementByClassName("operator").length;

function signClicked(object){
	for (var i = 0; i < number0f0peratorButton; i++){
		document.getElementByClassName("operator")[i].style.background = "#462878";
		document.getElementByClassName("operator")[i].style.color = "white";	
	}

	object.style.background = "white";
	object.style.color = "#462878";
}