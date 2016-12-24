var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//SpeakHello.js
(function (window) {
	var helloSpeaker = function (){

		function speak(name) {
  			console.log(speakWord + " " + name);
		}
		window.helloSpeaker = helloSpeaker;
	};

} ();

var speakWord = "Hello";
// end of SpeakHello.js

//SpeakGoodbye.js
(function (window) {
	var byeSpeaker = function (){
		function speak(name) {
  			console.log(speakWord + " " + name);
		}
		window.byeSpeaker = byeSpeaker;
	};

} ();
var speakWord = "Good Bye";
// end of SpeakGoodBye.js


for (i = 0; i < names.length; i ++) {
	var firstLetter = function (){
		var name = names[i];
		var x = charAt(0);
		firstLetter = x.toLowerCase();
	};
	if (firstLetter === "j") {
    	byeSpeaker()
	} else {
    // helloSpeaker.xxxx
}
}
	console.log(names[i])
};

if (/* fill in condition here */) {
    // byeSpeaker.xxxx
} else {
    // helloSpeaker.xxxx
}
}
