var totalNotes = 0;




function createNote(x){

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
	sound.click()
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(event) {
	if(event.keyCode == 67){
		createNote("c");
	}
	if(event.keyCode == 70){
		createNote("c1");
	}
	if(event.keyCode == 86){
		createNote("d");
	}
	if(event.keyCode == 71){
		createNote("d1");
	}
	if(event.keyCode == 66){
		createNote("e");
	}
	if(event.keyCode == 78){
		createNote("f");
	}
	if(event.keyCode == 74){
		createNote("f1");
	}
	if(event.keyCode == 77){
		createNote("g");
	}
	if(event.keyCode == 75){
		createNote("g1");
	}
	if(event.keyCode == 188){
		createNote("a");
	}
	if(event.keyCode == 76){
		createNote("a1");
	}
	if(event.keyCode == 190){
		createNote("b");
	}
}

$("#g").click(function() {
	if(event.keyCode == 67){
		createNote("c");
	}
	if(event.keyCode == 70){
		createNote("c1");
	}
	if(event.keyCode == 86){
		createNote("d");
	}
	if(event.keyCode == 71){
		createNote("d1");
	}
	if(event.keyCode == 66){
		createNote("e");
	}
	if(event.keyCode == 78){
		createNote("f");
	}
	if(event.keyCode == 74){
		createNote("f1");
	}
	if(event.keyCode == 77){
		createNote("g");
	}
	if(event.keyCode == 75){
		createNote("g1");
	}
	if(event.keyCode == 188){
		createNote("a");
	}
	if(event.keyCode == 76){
		createNote("a1");
	}
	if(event.keyCode == 190){
		createNote("b");
	}
}
