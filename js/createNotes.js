var a  = document.getElementById('a');
var b  = document.getElementById('b');
var c  = document.getElementById('c');
var d  = document.getElementById('d');
var e  = document.getElementById('e');
var f  = document.getElementById('f');
var g  = document.getElementById('g');
var a1 = document.getElementById('a-');
var c1 = document.getElementById('c-');
var d1 = document.getElementById('d-');
var g1 = document.getElementById('g-');
var f1 = document.getElementById('f-');


var clefAOffset = $("#clefA").position().top;
var clefFOffset = $("#clefF").position().top;
var clefDOffset = $("#clefD").position().top;
var clefBOffset = $("#clefB").position().top;
var clefGOffset = $("#clefG").position().top;
var clefEOffset = $("#clefE").position().top;

var totalNotes = 0;
function createNote(notePos){

  topOffset = "clef" + notePos + "Offset";

  var note = ("<i class='flaticon-music' alt='music-note' style='position:absolute; right:0px; top:" + topOffset + ";' id='note" + totalNotes + "'>");
  $("#sheetmusic").append(note);
  $("#note"  + totalNotes).animate({right: "100%"}, 10000);
  totalNotes++;
}

notePos.pause();
notePos.currentTime = 0;
notePos.play();


$("#button").click(function(){
	createNote(150);
});

window.addEventListener("keydown", checkKeyPressed, false);

 function checkKeyPressed(e) {
if(e.keyCode == 67){
	createNote(c);
}
if(e.keyCode == 70){
	createNote(c1);
}
if(e.keyCode == 86){
	createNote(d);
}
if(e.keyCode == 71){
	createNote(d1);
}
if(e.keyCode == 66){
	createNote(e);
}
if(e.keyCode == 78){
	createNote(f);
}
if(e.keyCode == 74){
	createNote(f1);
}
if(e.keyCode == 77){
	createNote(g);
}
if(e.keyCode == 75){
	createNote(g1);
}
if(e.keyCode == 188){
	createNote(a);
}
if(e.keyCode == 76){
	createNote(a1);
}
if(e.keyCode == 190){
	createNote(b);
}
}
