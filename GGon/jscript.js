$(document).ready(function () {
    var offset = $(window).scrollTop();
    var wd = $(window).width();
    var headerh = $('.header-banner__content').height
    var bannerh = $('.banner').height();
    var usecases = $('.use').height();
    $(window).on('scroll',()=>{
        if(offset >= bannerh|| wd <=480){
            $('.header-banner__text').css('margin-top','70px')
            $('.navbar--wrapper').addClass('sticky')
            
        }else{
            $('.navbar--wrapper').removeClass('sticky')
        };
    })
    

$(window).on('load',()=>{
    if(wd <=576){
        $('.ads-content__left').addClass('order-1')
    }else{
    }
    $('.ecommerce').css('margin-top',usecases -32 + 'px')
    $('.header-toggler--mod').attr('data-target','');
        $('.blog-block').on('click',()=>{
            $(this).find('.txt-toggle').toggle();
        })
        $('.header-toggler--mod').on('click',()=>{
            $('.navbar-toggler-icon--mod').toggleClass('tg2');
            $('#my-nav').toggleClass('move');
            $('.blur').toggle();
        })
})
});

