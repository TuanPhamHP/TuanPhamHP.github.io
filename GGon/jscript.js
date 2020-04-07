$(document).ready(function () {
    $(window).on('scroll load',()=>{
        var bannerh = $('.banner').height();
        var usecases = $('.use').height();
        var offset = $(window).scrollTop();
        var wd = $(window).width();
        var headerh = $('.header-banner__content').height
        $('.ecommerce').css('margin-top',usecases -32 + 'px')
        if(offset >= bannerh|| wd <=480){
            $('.header-banner__text').css('margin-top','70px')
            $('.navbar--wrapper').addClass('sticky')
            
        }else{
            $('.navbar--wrapper').removeClass('sticky')
        };
        if(wd <=576){
            $('.ads-content__left').addClass('order-1')
        }else{
        }
    })
    $('.header-toggler--mod').attr('data-target','');
    $('.blog-block').on('click',()=>{
        $(this).find('.txt-toggle').toggle();
    })
    $('.header-toggler--mod').on('click',()=>{
        $('.navbar-toggler-icon--mod').toggleClass('tg2');
        $('#my-nav').toggleClass('move');
        $('.blur').toggle();
    })
});