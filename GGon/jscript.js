$(document).ready(function () {
    $(window).on('scroll load',()=>{
        var offset = $(window).scrollTop();
        var wd = $(window).width();
        var bannerh = $('.banner').height();
        var usecases = $('.use').height();
        if(offset >= bannerh|| wd <=480){
            $('.header-banner__text').css('margin-top','70px')
            $('.navbar--wrapper').addClass('sticky')
            
        }else{
            $('.navbar--wrapper').removeClass('sticky')
        };
    })
$(window).on('load',()=>{
        var wd = $(window).width();
        var usecases = $('.use').height();
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
$('#ecomerce-btn').on('click',(e)=>{
    e.preventDefault();
    var offset = $('.ecommerce').offset();
    var top = offset.top;
    $(window).scrollTop(top-20);
})
$('#online-ads-btn').on('click',(e)=>{
    e.preventDefault();
    var offset = $('.advertisement').offset();
    var top = offset.top;
    $(window).scrollTop(top-20);
})
$('#casino-btn').on('click',(e)=>{
    e.preventDefault();
    var offset = $('.casino').offset();
    var top = offset.top;
    $(window).scrollTop(top-20);
})
});

