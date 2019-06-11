$(document).ready(function() {
    (function () {
        try {
            $('.header__nav').on('click', function () {
                $('.header__nav .header__nav_line').toggleClass('animate');
            })
        } catch (e) {
            console.log(e.message);
        }

    })();

    (function ($) {
        $(document).ready(function () {
            $('.firstslide').owlCarousel({
                items: 1,
                nav: true,
                dots: true,
                loop: true
            });
        });
    }(jQuery));


    function menu(selector) {
        $(`${selector} ul`).css('display', 'none');

        var ul = $(`${selector} > li > a`).siblings('ul');

        ul.siblings('a').on('click', function (e) {
            e.preventDefault();
            var subUl = $(this).siblings('ul');
            var activeLi = $(this).parent('li');
            activeLi.toggleClass('noborder');
            subUl.toggleClass('active');

            if (subUl.hasClass('active')) {
                subUl.css('display', 'block');
            } else {
                subUl.css('display', 'none');
            }

        });
    }

    menu(".accordion_menu");
}(jQuery));


