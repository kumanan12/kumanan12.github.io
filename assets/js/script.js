// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        var system = {
            win: false,
            mac: false,
            xll: false
        };
        //����ƽ̨
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        //�ж�ƽ̨����
        if (system.win || system.mac || system.xll) {
            if ($(window).scrollTop() > 70) {
                $('.site-header').addClass('site-header-nav-scrolled');
            } else {
                $('.site-header').removeClass('site-header-nav-scrolled');
            }
        } else {

            if ($(window).scrollTop() > 40) {
                $('.site-header').addClass('site-header-nav-scrolled-ph');
            } else {
                $('.site-header').removeClass('site-header-nav-scrolled-ph');
            }
        }
    });
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function () {
    windowScroll();
    $('.geopattern').each(function () {
        var element = $(this);
        var pattern = element.data("pattern-id");
        var randomNumber = getRandomInt(10,10000000);
        $("#rnd").text("random number = " + randomNumber);
        console.log("random number= " + randomNumber);
        //element.geopattern(pattern);
        element.geopattern(randomNumber + "kjkjk");
        element.attr('title', randomNumber);

    });
});