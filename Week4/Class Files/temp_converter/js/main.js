var tempC = 25;

var tempF = tempC * 9 / 5 + 32;

var threshold = 70;

if (tempF < threshold) {
	document.body.setAtrribute ("style", "background-color: grey;");
	document.write(tempF);
}
	//else if (condition) { // do this stuff }
else if (tempF > threshold) {
	document.body.setAtrribute ("style", "background-color: yellow;");
	document.write(tempF);
	}