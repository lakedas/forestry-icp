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

// Animations
$(document).ready(function(){
 
  $('.plain-header h2').waypoint(function() {
      $('.plain-header h2').addClass('fadeIn');
      $('.plain-header h3').addClass('fadeIn');
      $('.hero-arrow').addClass('fadeIn');
  }, { offset: '50%' });
  $('.about_image').waypoint(function() {
	$('.about_image').addClass('fadeInRight');
  }, { offset: '75%' });
  $('.fund_size').waypoint(function() {
	$('.fund_size').addClass('fadeInLeft');
  }, { offset: '75%' });
  $('.investment_size').waypoint(function() {
	$('.investment_size').addClass('fadeInLeft');
  }, { offset: '75%' });
  $('.stage').waypoint(function() {
	$('.stage').addClass('fadeInLeft');
  }, { offset: '75%' });
  $('.sectors').waypoint(function() {
	$('.sectors').addClass('fadeInLeft');
  }, { offset: '75%' });
  $('.person').each(function() {
	$(this).waypoint(function() {
		$(this.element).find('img').addClass('fadeInDown');
		$(this.element).find('.linked').addClass('fadeInDown');
		$(this.element).find('.person-info').addClass('fadeInUp');
  	}, { offset: '75%' });
  });
  $('.pure-u-md-1-2:nth-of-type(odd)').each(function() {
  	$(this).waypoint(function() {
		$(this.element).addClass('fadeInLeft');
  	}, { offset: '75%' });
  });
  $('.pure-u-md-1-2:nth-of-type(even)').each(function() {
  	$(this).waypoint(function() {
		$(this.element).addClass('fadeInRight');
		$(this.element).addClass('delay-025s');
  	}, { offset: '75%' });
  });
  $('.contact').waypoint(function() {
	$('.contact_wrap').addClass('fadeInDown');
  }, { offset: '75%' });

});
