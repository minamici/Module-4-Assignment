//SpeakHello.js
(function (window) {
	var helloSpeaker = new Object();
	helloSpeaker.speakWord = "Hello";
	helloSpeaker.speak = function(name){
	console.log(helloSpeaker.speakWord + " " + name)
	};

		window.helloSpeaker.speak = helloSpeaker.speak;
		window.helloSpeaker = helloSpeaker;
}) (window);
// end of SpeakHello.js