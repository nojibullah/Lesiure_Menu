
$(document).ready(function() {
  // Set the initial state of the menu
  setMenuState();

  // Call setMenuState() on window resize
  $(window).resize(function() {
    setMenuState();
  });

  // Function to set the state of the menu based on screen size
  function setMenuState() {
    var windowWidth = $(window).width();
    var mobileBreakpoint = 768;

    // If the screen size is smaller than the mobile breakpoint, collapse the menu
    if (windowWidth < mobileBreakpoint) {
      $('#menu').removeClass('expanded');
    }
    // If the screen size is larger than the mobile breakpoint, expand the menu
    else {
      $('#menu').addClass('expanded');
    }
  }

  // Toggle the menu when the button is clicked
  $('#menu-toggle').click(function() {
    $('#menu').toggleClass('expanded');
  });
});

// Find all submenu items
var submenus = $('#menu ul ul');

// Add event listener to each submenu item
submenus.hover(function() {
  // Show the promo column
  $(this).parent().append($('#promo').removeClass('promo-hidden'));
}, function() {
  // Hide the promo column
  $('#promo').addClass('promo-hidden');
});
