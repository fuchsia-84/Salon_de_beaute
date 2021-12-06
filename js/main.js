$(function() {
    $toggle_btn = $('.toggle_btn');
    $global_nav = $('#global_nav');
    $header = $('#header');
    var header_height = $header.outerHeight();
    var window_height = $(window).height();


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

    /* smooth scroll  */
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var adjust = header_height;
        var position = target.offset().top - adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    /* style gallery for PC */
    $('#gallery_pc').flickity({
        autoPlay: true,
        draggble: false
    });

    /* style gallery for SP*/
    $('#gallery_sp_1').flickity({
        autoPlay: true,
        draggble: false
    });
    $('#gallery_sp_2').flickity({
        autoPlay: true,
        draggble: false
    });
    $('#gallery_sp_3').flickity({
        autoPlay: true,
        draggble: false
    });
});