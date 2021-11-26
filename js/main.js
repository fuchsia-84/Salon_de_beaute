$(function() {
    $toggle_btn = $('.toggle_btn');
    $global_nav = $('#global_nav');

    /* toggle button clicked, show global navigation*/
    $toggle_btn.click(function() {
        $global_nav.slideToggle();
        $toggle_btn.toggleClass('show');
    });

    /* style gallery for PC */
    $('#gallery_pc').flickity({
        autoPlay: true,
        draggble: false
    });
});