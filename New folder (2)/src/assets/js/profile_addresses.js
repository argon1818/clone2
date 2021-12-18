$(document).ready(function () {
    var addressBox = $('main #profile #profile_addresses .address');
    $('main #profile #profile_addresses .addNewLocation').on('click',function () {
        addressBox.slideToggle();
    })


})