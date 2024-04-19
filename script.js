function toCase(text) {
  // write your code here
	const textStr = text.trim();
	
	return textStr.toLowerCase()+'-' +textStr.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
