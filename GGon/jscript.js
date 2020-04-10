$(document).ready(function () {
    $(window).on('scroll load resize',()=>{
        var offset = $(window).scrollTop();
        var wd = $(window).width();
        var bannerh = $('.banner').height();
        // ecommerce
        var offseteco = $('.ecommerce').offset();
        var topeco = offseteco.top;
        var ecoh = $('.ecommerce').height();
        //advertisement
        var offsetads = $('.advertisement').offset();
        var topads = offsetads.top;
        var adsh = $('.advertisement').height();
        //casino
        var offsetcas = $('.casino').offset();
        var topcas = offsetcas.top;
        var cash = $('.casino').height();
        //gaming
        var offsetgm = $('.gaming').offset();
        var topgm = offsetgm.top;
        var gmh = $('.gaming').height();
        //token
        var offsetk = $('.token').offset();
        var toptk = offsetk.top;
        var tkh = $('.token').height();
        var usecases = $('.use').height();
        if(offset >= bannerh|| wd <=480){
            $('.header-banner__text').css('margin-top','70px')
            $('.navbar--wrapper').addClass('sticky')
            
        }else{
            $('.navbar--wrapper').removeClass('sticky')
        };
        if(wd <= 767){
            $('.casino-content__left').find('img').attr('src','./img/the-rest/decentrialized-left-2-1.png')
        }else{
            $('.casino-content__left').find('img').attr('src','./img/the-rest/decentrialized-left-2.png')
        }
        if(wd <= 991){
            $('.t__clicked--mod').on('click',()=>{
                $('#my-nav').removeClass('move')
                $('.blur').css('display','none');
            })
        }
        //animation cho section ecommerce
        if (offset >= topeco - 150 && offset < topeco+ecoh) {
            $('.eco-hd').addClass('t-hd-animation-l')
            $('.ecommerce-content__left').addClass('img-scl')
        }else{
            // $('.eco-hd').removeClass('t-hd-animation-l')
            // $('.ecommerce-content__left').removeClass('img-scl')
        }
        //animation cho section advertisement
        if (offset >= topads - 170 && offset < topads+adsh) {
            $('.ads-hd').addClass('t-hd-animation-r')
            $('.ads-img').addClass('img-scl')
        }else{
            // $('.ads-hd').removeClass('t-hd-animation-r')
            // $('.ads-img').removeClass('img-scl')
        }
        //animation cho casino
        if (offset >= topcas - 170 && offset < topcas+cash) {
            $('.casino-hd').addClass('t-hd-animation-l')
            $('.casino-img').addClass('img-scl')
        }else{
            // $('.casino-hd').removeClass('t-hd-animation-l')
            // $('.casino-img').removeClass('img-scl')
        }
        //animation cho gaming
        if (offset >= topgm - 170 && offset < topgm+gmh) {
            $('.gaming-hd--mod').addClass('t-hd-animation-r')
            $('.gm-block').addClass('content-scl')
        }else{
            // $('.gaming-hd--mod').removeClass('t-hd-animation-r')
            // $('.gm-block').removeClass('content-scl')
        }
        // animation cho token
        if (offset >= toptk - 170 && offset < toptk+tkh) {
            $('.first-left-txt').addClass('t-block-animation-r')
            $('.txt-block1').addClass('content-scl')
            $('.txt-block2').addClass('content-scl')
            $('.txt-block3').addClass('content-scl')
            $('.second-left-txt').addClass('txt-cl-change')
            $('.third-left-txt').addClass('txt-cl-change')
        }else{
            // $('.casino-hd').removeClass('t-hd-animation-l')
            // $('.casino-img').removeClass('img-scl')
        }
    })
$(window).on('load resize',()=>{
        var wd = $(window).width();
        var usecases = $('.use').height();
    if(wd <=576){
        $('.ads-content__left').addClass('order-1')
    }else{
    }
    $('.ecommerce').css('margin-top',usecases -105 + 'px')
    if (wd < 786) {
        $('.ecommerce').css('margin-top',usecases -45 + 'px')
    }

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
$('.blur').on('click',()=>{
    $('#my-nav').toggleClass('move')
    $('.blur').css('display','none');
})
});

