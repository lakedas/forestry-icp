// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
	// Only prevent default if animation is actually gonna happen
	event.preventDefault();
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 1000, function() {
	  // Callback after animation
	  // Must change focus!
	  var $target = $(target);
	  $target.focus();
	  if ($target.is(":focus")) { // Checking if the target was focused
	    return false;
	  } else {
	    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	    $target.focus(); // Set focus again
	  };
	});
      }
    }
});

function toggleMobileMenu() {
	$('.mobile-menu-trigger').find('.menu-icon').toggleClass('is-active');
	$('.navigation').toggleClass('mobile-menu-show');
}

// Mobile Menu
$(document).ready(function() {
	$('.mobile-menu-trigger').click(function(e){
		e.preventDefault();
		toggleMobileMenu();
	});
});

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
