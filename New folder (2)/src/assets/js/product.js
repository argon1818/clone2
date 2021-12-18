$(document).ready(function () {
    var showMore = $('main .container article .description .productFeatures .showMore span');
    var ul = $('main .container article .description .productFeatures ul');
    showMore.click(function () {
        if(ul.hasClass('active')){
            showMore.text('+نمایش بیشتر')
        }
        else {
            showMore.text('-نمایش کمتر')
        }
        ul.toggleClass('active');
    })
    var $showMore1 = $('#showMore1');
    var div = $('main #product #tabChildes .tab1 .tab1Container .expertSummary div');
    $showMore1.click(function () {
        if (div.hasClass('active')) {
            $showMore1.text('+نمایش بیشتر')
        } else {
            $showMore1.text('-نمایش کمتر')
        }
        div.toggleClass('active');
    })
    var answerThisQuestion = $('main #product #tabChildes .tab4 article .question > li .left .bottom .response');
    answerThisQuestion.click(function () {
        $(this).parents('.question').find('.writeAnswer').slideToggle();
    })

        //show modal if .feedback click
    $('.feedback').click(function () {
        $('#modalBox').fadeIn();
        $('body').addClass('active');
    })

    $('.closeModal').click(function () {
        $('.modalBox').fadeOut();
        $('body').removeClass('active');
    })



//برای وقتی که کاربر کلید Esc رو هم زد صفحه modalBox  محو بشه.
    $(document).keydown(function (e) {
        if(e.keyCode===27){
            $('.modalBox').fadeOut();
            $('body').removeClass('active');
        }
    })



    //function of close modal if outside click
    var modal1 = document.getElementById('modalBox');
    var modal2 = document.getElementById('bestPrice');
    var modal3 = document.getElementById('imageGallery');
    window.addEventListener("click", OutSide);
    function OutSide(e) {
        if (e.target == modal1 || e.target == modal2 || e.target == modal3) {
            modal1.style.display = 'none';
            modal2.style.display = 'none';
            modal3.style.display = 'none';
            $('body').removeClass('active');
        }
    }

    //state dropdown
    $('.modalBox .modalContainer .left .shop .dropdown .selected').click(function () {
        $('.modalBox .modalContainer .left .shop .dropdown > ul ').toggleClass('active');
        $('.modalBox .modalContainer .left .shop .dropdown').toggleClass('rotate');
        $('.modalBox .modalContainer .left .shop .dropdown .selected').toggleClass('active');
    })

    $('.modalBox .modalContainer .left .shop .dropdown > ul > li').click(function () {
        $('.modalBox .modalContainer .left .shop .dropdown > ul').removeClass('active');
        var txt = $(this).text();
        $('.modalBox .modalContainer .left .shop .dropdown .selected').text(txt);
        $('.modalBox .modalContainer .left .shop .dropdown').toggleClass('rotate');
    })
    //
    
    $('main .container article .suggestPrice').click(function () {
        $('#bestPrice').fadeIn();
        $('body').addClass('active');
    })


    $('.modalBox .modalContainer .left .see input:checked[type="checkbox"]').click(function () {
        if(!$('.modalBox .modalContainer .left .see input:checked[type="checkbox"]').is(':checked')){
            $('.modalBox .modalContainer .left .onlineshop').fadeOut(0);
            $('.modalBox .modalContainer .left .shop').fadeIn(0);
        }
        else{
            $('.modalBox .modalContainer .left .onlineshop').fadeIn(0);
            $('.modalBox .modalContainer .left .shop').fadeOut(0);
        }

    })

    //for while thumbnail image clicked then imageGalley fadeIn
    var imgthumbnail = $('#product article .gallery .imgGallery ul li');
        imgthumbnail.click(function () {
            var newSrc = $(this).find('img').attr('data-image-1280');
            $('#imageGallery .modalContainer .right').find('img').attr('src',newSrc);
            $('#imageGallery').fadeIn();
            $('body').addClass('active');
            var index = $(this).index();
            var imageGallerySelected = $('#imageGallery .modalContainer .left > ul > li');
            imageGallerySelected.removeClass('active');
            imageGallerySelected.eq(index).addClass('active');

        })



    //for gallery
    var thumbnail = $('#imageGallery .modalContainer .left > ul > li');

    thumbnail.click(function () {
        $('#imageGallery .modalContainer .left > ul > li').removeClass('active');
        $(this).toggleClass('active');

        var newSrc = $(this).find('img').attr('data-image-1280');
        $('#imageGallery .modalContainer .right').find('img').attr('src',newSrc);
    })


    //for gallery zoom

   /* $(document).ready(function(){
        $('#ex1').zoom();
        $('#ex2').zoom({ on:'grab' });
        $('#ex3').zoom({ on:'click' });
        $('#ex4').zoom({ on:'toggle' });
    });*/

    $('#imageGallery .modalContainer .right #ex1').zoom();


    $('#zoomProduct').elevateZoom({
        'zoomWindowOffetx':-1235,
        'zoomWindowOffety':-42,
        'zoomWindowWidth' :800,
        'zoomWindowHeight':560,
        'easing':true,
        'easingDuration':160,
        'lensFadeIn':true,
        'lensFadeOut':true,
        'zoomWindowFadeIn':true,
        'borderSize':0,
    });
    $('main #product .tab #tabs li').click(function () {
        $('main #product .tab #tabs li').removeClass('active');
        $(this).addClass('active');
        var child = $('#product #tabChildes .hidden');
        child.fadeOut(0);
        var index=$(this).index();
        child.eq(index).fadeIn();
    })
})




