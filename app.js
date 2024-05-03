$(document).ready(function() {
    $('.testimonial:not(:first)').hide();
    setInterval(function() {
        var $current = $('.testimonial:visible');  // Get the current visible testimonial
        var $next = $current.next('.testimonial').length ? $current.next('.testimonial') : $('.testimonial:first');
        $current.fadeOut(1000, function() {  // Fade out the current testimonial
            $next.fadeIn(1000);  // Fade in the next testimonial
        });
    }, 5000);  // Change every 5 seconds
});