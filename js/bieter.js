var quote1 = '"We would not go anywhere else."<br>-Isabella M.';
var quote2 = '"Loved my visit, EVERYONE is very friendly and extremely helpful and knowledgeable. Would definately recommend!"<br>-Cheryl M.';
var quote3 = '"An absolute pleasurable experience. A great office with professional staff that treats you like a true friend."<br>-Dan D.';
var quote4 = '"Thank you Dr.Beiter for seeing me quickly and retrieving the contact lens I couldn\'t \"find\" in my eye."<br>Paulette H.';
var quote5 = '"Thank you for your professional, friendly and exceptional service!!"<br>-Lynn S.';
var quote6 = '"I have always been pleased with the service and everyone who works there. They are exceptional."<br>-Louise B.';
var quote7 = '"Everyone was so helpful and kind! Even though it was my first time there, I felt like we were all friends. Thank you!"<br>-Trudence T.';
var quote8 = '"Your staff is so friendly and professional. I really appreciate all of the time that Dr. Rogers took to talk to me about my dry eyes. Thank you!"<br>-Jeffry S.';
var quote9 = '"The staff at Bieter Eye Care is always very helpful, especially Tracy! Thank you.<br>-Mary S.';
var quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9];

document.addEventListener("DOMContentLoaded", function() {
	// QUOTE BANNERS

	// var index = Math.round(Math.random() * (quoteArray.length - 1));

	// var quoteLeft = document.getElementById('quoteLeft');
	// quoteLeft.innerHTML = quoteArray[index];

	// quoteArray.splice(index, 1);

	// var index = Math.round(Math.random() * (quoteArray.length - 1));

	// var quoteRight = document.getElementById('quoteRight');
	// quoteRight.innerHTML = quoteArray[index];

	// quoteArray.splice(index, 1);

	// var quoteIndex = Math.round(Math.random() * (quoteArray.length - 1));


	//QUOTE BAR LOOP

	var arrayIndex = 1;	

	function callLoop() {
		setTimeout(function() {
		loop();
	}, 10000);
	}
	function loop() {
		var quoteBar = document.getElementById('quoteBar');
		quoteBar.innerHTML = quoteArray[arrayIndex];
		console.log(arrayIndex);
		
		if (arrayIndex == 8) {
			arrayIndex = 0;
			callLoop();
		} else {
		arrayIndex++;
		callLoop();
	}
}
	callLoop();

	// $("ul#quoteBar").cycle({ 
	// 	fx:'scrollUp',
	// 	speed:700,
	// 	timeout:10000,
	// 	delay:0,
	// 	pause: true,
	// 	pauseOnPageHover:true,
	// });
});

















