var totalNotes = 0;
function createNote(notePos){
  var note = $("<i class='flaticon-music' alt='music-note' width='20px' height='40px' style='position:absolute; right:0px; top:" + notePos + "px;' id='note" + totalNotes + "'>");
  
  $("#sheetmusic").append(note);
  setTimeout(function(){
  console.log("hello");
  //	$("#note"  + totalNotes).animate({left: "-500"}, 10000);
  	  	$("#note" + totalNotes-1).css("border", "5px solid red");
  }, 3000);

  totalNotes++;
}



$("#button").click(function(){
	createNote(150);
});

