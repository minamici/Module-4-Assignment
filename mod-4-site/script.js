
for (i = 0; i < names.length; i ++) {

		var firstLetter = function (window){
		var name = names[i];
		var x = name.charAt(0);
		window.name = name;
		return x.toLowerCase();
	};

	if (firstLetter === "j") {
    	byeSpeaker.speak();
	} else {
    	helloSpeaker.speak();
}
	console.log(names[i])
};


