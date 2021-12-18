$(document).ready(function () {
 /*   $('.ScrollTop').click(function () {
        window.scrollTo({top:0})
    })*/

/*$(document).ready(function () {
    $('.ScrollTop').click(function () {
        $('html').animate({scrollTop:'0'},300);
    })*/
    var box = $(window);
    var nav = $('nav');
    var posEnd =0;

    box.scroll(function () {
        var posStart = box.scrollTop();
        if(posStart>posEnd)
        {
            nav.addClass('hidden');
        }
        else
        {
            nav.removeClass('hidden');
        }
        posEnd=posStart;
    })



})
