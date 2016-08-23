/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Prevent default form submit and AJAX
var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
    e.preventDefault();
    // Remove old messages
    $('.contact-form-message').remove();
    $.ajax({
        url: '//formspree.io/battaliontheatre@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="contact-form-message">Sending message…</div>');
        },
        success: function(data) {
            // Reset form with native Javascript
            $contactForm.get(0).reset();
            $contactForm.append('<div class="contact-form-message">Message sent!</div>');
        },
        error: function(err) {
            $contactForm.append('<div class="contact-form-message">Oops, there was an error.</div>');
        }
    });
});
