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

$(function() {
    var Accordion = function(el) {
        $("ul li").has("ul").css({color: 'red'});
        $("ul li").children("ul").hide();
        $("ul li").click(function (e) {
            $(this).children().slideToggle();
        })
        //console.log(el);
        //this.el = el;

        // more then one submenu open?
        //this.multiple = multiple;

        //var dropdownlink = this.el.find('.dropdownlink');
        //dropdownlink.on('click',
          //  { el: this.el, multiple: this.multiple },
           // this.dropdown);
    };

    var accordion = new Accordion($('.accordion_menu'));
})