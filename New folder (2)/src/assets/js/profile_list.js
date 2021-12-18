$(document).ready(function () {
    $('.tab').on('click',function () {
        var index = $(this).index();
        var child =$('.child');
        $('.tab').removeClass('active');
        $(this).toggleClass('active');
        child.fadeOut(0);
        child.eq(index).fadeIn(0);
    })
})