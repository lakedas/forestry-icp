/*
window.addEventListener("load", function(){
	var div = document.querySelector(".plain-header h2");
	var letters = div.innerText.split('');
	while(div.hasChildNodes()) div.removeChild(div.firstChild);

	for(var i = 0; i < letters.length; i++) {
	  var letter = document.createElement('span'),
	      style = 'opacity ' + (Math.random() * 5 + 1) + 's linear';
	  letter.appendChild(document.createTextNode(letters[i]));
		letter.style.WebKitTransition = letter.style.MozTransition = 
	    letter.style.MSTransition = letter.style.OTransition = letter.style.transition = style;
	  letter.style.opacity = 0;
	  div.appendChild(letter);
	}

	setTimeout(function() {
	  for(var i = 0; i < div.childNodes.length; i++) {
	    div.childNodes[i].style.opacity = 1;
	  }
	}, 0);
});
*/