//var letters = {"c": 1, "c-": 2, "d": 3, "d-": 4, "e": 5, "f": 6, "f-": 7, "g": 8, "g-": 9, "a": 10, "a-": 11, "b": 12};
var letters = {"b": 1, "a-": 2, "a": 3, "g-": 4, "g": 5, "f-": 6, "f": 7, "e": 8, "d-": 9, "d": 10, "c-": 11, "c": 12};

//var top = $("#clefC").position().top;
var bottom = $("#clefB").position().top;
//console.log(top);
var height = $("#sheetmusic").height();

var totalNotes = 0;

function createNote(x){
	var offset = ((height * letters[x]/12) + 50);
	var note = ("<i class='flaticon-music' alt='music-note' style='transform:scale(2);  position:absolute; right:0px; top:" + offset + "px;' id='note" + totalNotes + "'>");


  	$("#sheetmusic").append(note);
 	$("#note"  + totalNotes).animate({right: "102%"}, 10000);
 	totalNotes++;



 	//play note
 	sound = document.getElementById(x);
	sound.pause();
	sound.currentTime=0;
	sound.play();
}

//resize instrument stand to page size

var $header = $('#navBar');
var $footer = $('#footer');
var $sheetMusic = $('#sheetmusic');
var $instrumentStand = $('#instrumentStand');
var $instrument = $("#instrument");

var $window = $(window).on('resize', function(){
   var standHeight = $(window).height() - $header.height() - $footer.height() - $sheetMusic.height()-$instrument.height() -41;
   if(standHeight > $instrument.height()/2){
   	console.log(standHeight);
   	   $instrument.css("margin-top", standHeight/2);
   		$instrument.css("margin-bottom", standHeight/2);
   }
}).trigger('resize'); //on page load



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
