var letters = {"c": 1, "c1": 2, "d": 3, "d1": 4, "e": 5, "f": 6, "f1": 7, "g": 8, "g1": 9, "a": 10, "a1": 11, "a2": 12};

var top = $("#clefC").position().top;
var bottom = $("#clefB").position().top;

console.log()
function createNote(x){
	var offset = ((bottom + letters[x]/12) + bottom);
	console.log(top);
	console.log(bottom);
	console.log(x);
	var note = ("<i class='flaticon-music' alt='music-note' style='transform:scale(2); position:absolute; right:0px; top:" + offset + "px;' id='note" + totalNotes + "'>");


	topOffset = 0;
	//topOffset = $(("#clef" + x.toUpperCase()).position().top);
	var note = ("<i class='flaticon-music' alt='music-note' style='transform:scale(2); position:absolute; right:0px; top:" + topOffset + ";' id='note" + totalNotes + "'>");
  	$("#sheetmusic").append(note);
 	$("#note"  + totalNotes).animate({right: "100%"}, 10000);
 	totalNotes++;



 	//play note
 	sound = document.getElementById(x);
	sound.pause();
	sound.currentTime=0;
	sound.play();
}


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(event) {
	if(event.keyCode == 67){
		createNote("c");
	}
	if(event.keyCode == 70){
		createNote("c-");
	}
	if(event.keyCode == 86){
		createNote("d");
	}
	if(event.keyCode == 71){
		createNote("d-");
	}
	if(event.keyCode == 66){
		createNote("e");
	}
	if(event.keyCode == 78){
		createNote("f");
	}
	if(event.keyCode == 74){
		createNote("f-");
	}
	if(event.keyCode == 77){
		createNote("g");
	}
	if(event.keyCode == 75){
		createNote("g-");
	}
	if(event.keyCode == 188){
		createNote("a");
	}
	if(event.keyCode == 76){
		createNote("a-");
	}
	if(event.keyCode == 190){
		createNote("b");
	}
}
