//SpeakGoodbye.js
(function (window) {
	var byeSpeaker = new Object();
	byeSpeaker.speakWord = "Good Bye";
	byeSpeaker.speak = function (name){
	console.log(byeSpeaker.speakWord + " " + name)
	};

		window.byeSpeaker.speak = byeSpeaker.speak;
		window.byeSpeaker = byeSpeaker;
}) (window);
// end of SpeakGoodBye.js