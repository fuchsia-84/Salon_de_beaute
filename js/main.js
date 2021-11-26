$(function() {
    $toggle_btn = $('.toggle_btn');
    $global_nav = $('#global_nav');
    $header = $('#header');
    window_height = $(window).height();


    /* toggle button clicked, show global navigation*/
    $toggle_btn.click(function() {
        $global_nav.slideToggle();
        $toggle_btn.toggleClass('show');
    });

    /* scroll over view height, change header style */
    $(window).on('scroll', function() {
        if (window_height < $(window).scrollTop()) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    /* style gallery for PC */
    $('#gallery_pc').flickity({
        autoPlay: true,
        draggble: false
    });
});