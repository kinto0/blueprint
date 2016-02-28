var totalNotes = 0;
function createNote(notePos){
  var note = ("<i class='flaticon-music' alt='music-note' style='position:absolute; right:0px; top:40px;' id='note" + totalNotes + "'>");
  
  $("#sheetmusic").append(note);
  $("#note"  + totalNotes).animate({right: "100%"}, 10000);
  totalNotes++;
}



$("#button").click(function(){
	createNote(150);
});

