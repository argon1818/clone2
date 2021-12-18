$(document).ready(function () {
    var province_select = $('main .container .middle .mainPic .container-fluid > .search  .ir-select > label .ir-province');
    var province_placeHolder = $('main .container .middle .mainPic .container-fluid > .search  .ir-select > label .province');
    province_select.on('click',function () {
        province_placeHolder.addClass('active');
    })

   /* var navbar_icon = $('.container-fluid .navbar .container-fluid .row .column1 .navbar-toggler');
    var navbar_nav = $('.container-fluid .navbar .container-fluid .row .column1 #navbarNavAltMarkup');
    navbar_icon.on('click',function () {
        navbar_nav.toggleClass('active');
    })*/
})