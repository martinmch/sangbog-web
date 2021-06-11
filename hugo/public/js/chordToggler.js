var chordsShowing = true;

function hideChords(){
    let chordlines = document.querySelectorAll(".chordline strong");
    for (let i = 0; i < chordlines.length; i++) {
	    chordlines[i].style.display = "none";
    }

    let chordLinesSet = document.querySelectorAll(".chordlines");
    for (let i = 0; i < chordLinesSet.length; i++) {
	    chordLinesSet[i].style.lineHeight = "inherit";
    }
    chordsShowing = false;
}

function showChords(){
    let chordlines = document.querySelectorAll(".chordline strong");
    for (let i = 0; i < chordlines.length; i++) {
	    chordlines[i].style.display = "unset";
    }

    let chordLinesSet = document.querySelectorAll(".chordlines");
    for (let i = 0; i < chordLinesSet.length; i++) {
	    chordLinesSet[i].style.lineHeight = "2.5";
    }
    chordsShowing = true;
}

function toggleChords(){
    let button = document.getElementById("chordButton");
    if(chordsShowing)
    {
        hideChords();
        button.innerText = "Show chords";
    }
    else 
    {
        showChords();
        button.innerText = "Hide chords";
    }
}
