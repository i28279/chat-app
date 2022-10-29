/* I have created an HTML editor… 
You can use this editor for instant need*/

//Result box alert…
let alertMe = "" + 
  "<center style='margin-top: 6.5vh'>" +
			"<b>Click <kbd>Run</kbd> to view result of your code…</b><br/><br/>" +
			"This editor is for immediate use only.<br/>" + 
			"You should avoid this and use your own editor. <br/>" +
			"And double click on <kbd>Clear</kbd> to clear with snippet…" +
  "</center>";
//Html snippet code…
let sniPPet = "" +
  '<!DOCTYPE html> \n' + 
			'<html lang="en"> \n' +
			'<head> \n' +
			'   <meta charset="UTF-8"> \n' +
			'   <title>Page title</title> \n' +
			'</head> \n' +
			'<body> \n' +
			'   <p>This is a paragraph…</p> \n' +
			'   <p>This is another paragraph…</p> \n' +
			'</body> \n' +
  '</html> \n';
//To show this editor in one "div"…
document.getElementById("myEditor").innerHTML = "" +
		"<!-- Code Editor -->" +
		"<div class='editor'>" +										 //Designed an editor…
				"<input type='checkbox' id='box'>" +
				"<label for='box' class='try'></label>" +
				"<div class='edit'>" +
						"<textarea placeholder='Write your code…' id='code'>" + sniPPet +"</textarea>" +
						"<div class='cont'>" +
								"<button id='clear'>Clear</button>" +
								"<button id='run'>Run</button>" +
						"</div>" +
						"<div id='view'>" + alertMe +"</div>" +
				"</div>" +
		"</div>";
//To Run manually…
document.getElementById("run").onclick = function() {
		let codes = document.getElementById("code").value;
		document.getElementById("view").innerHTML = codes;
		document.getElementById("code").focus();
}
//To Run automatically…
document.getElementById("code").onkeyup = function() {
		let codes = document.getElementById("code").value;
		document.getElementById("view").innerHTML = codes;
}
//To Clear reset the Editor…
document.getElementById("clear").onclick = function() {
		let codes = document.getElementById("code").value = sniPPet;
		document.getElementById("view").innerHTML = alertMe;
		document.getElementById("code").focus();
}
//To Clear All from the Editor…
document.getElementById("clear").ondblclick = function() {
		let codes = document.getElementById("code").value = "";
		document.getElementById("view").innerHTML = "";
}
