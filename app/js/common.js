(function ($) {
    $(document).ready(function() {
        $('.firstslide').owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            loop: true
        });
    });
}(jQuery));

$(document).ready(function() {
    function menu(selector){
        $(`${selector} ul`).css('display', 'none');

        var ul = $(`${selector} > li > a`).siblings('ul');

        ul.siblings('a').on('click', function(e){
            e.preventDefault();
            var subUl = $(this).siblings('ul');
            subUl.toggleClass('active');

            if(subUl.hasClass('active')){
                subUl.css('display', 'block');
            } else {
                subUl.css('display', 'none');
            }

        });
    }

    menu(".accordion_menu");
}(jQuery));


