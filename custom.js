function change_text() {
	var button = document.getElementById('hide_show_btn');

	if (button.innerHTML === "Hide instructions") {
		button.innerHTML = "Show instructions";
	}
	else {
		button.innerHTML = "Hide instructions";
	}
}