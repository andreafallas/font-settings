function change_text() {
	var button = document.getElementById('hide_show_btn');

	if (button.innerHTML === "Hide instructions") {
		button.innerHTML = "Show instructions";
	}
	else {
		button.innerHTML = "Hide instructions";
	}
}

function changeFontSize(id,step) {
	step = parseInt(step,10);
	var x = document.getElementById(id);
	var currSize = parseInt(x.style.fontSize,10);
	x.style.fontSize = (currSize+step) + 'px';
}

function serif() {
	document.getElementById('text').style.fontFamily="Georgia, Times, Times New Roman, serif";
}

function sans() {
	document.getElementById('text').style.fontFamily="Lato,Helvetica,Arial,sans-serif";
}