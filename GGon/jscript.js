$(document).ready(function () {
    $('.header-toggler--mod').on('click',()=>{
        $('.navbar-toggler-icon--mod').toggleClass('tg2');
        $('#my-nav').toggleClass('move');
        $('.blur').toggle();
    })
    $(window).on('scroll load resize',()=>{
        var offset = $(window).scrollTop();
        var wd = $(window).width();
        var bannerh = $('.banner').height();
        var hbannerh = $('.header-banner__content').height();
        if (wd >= 992) {
           if (offset > bannerh - hbannerh) {
            $('.navbar--wrapper').addClass('sticky')
            $('.t-86px').css('display','block');
           }else{
            $('.navbar--wrapper').removeClass('sticky')
            $('.t-86px').css('display','none');
           }
        }else{
            $('.navbar--wrapper').addClass('sticky')
            $('.t-86px').css('display','block');
            $('.header-banner__content').css('margin-top','90px');
            if (wd >= 600) {
                $('.sticky').css('height','70px');
            }else{
                $('.sticky').css('height','50px');
            }
        }
       
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
        //partner
        var offprtn = $('.partner').offset();
        var toppn = offprtn.top;
        var prtimgcol = $('#partner-img-col').width();
        //blog
        var offblg = $('.blogs').offset();
        var topblg = offblg.top;
        //contact
        var offctt = $('.contact').offset();
        var topctt = offctt.top;
        if(prtimgcol > 1360){
            $('.partner17').removeClass('mx-auto')
            $('.partner18').removeClass('mx-auto')
            $('.partner17').addClass('mx-2')
            $('.partner18').addClass('mx-2')
        }else{
            $('.partner17').removeClass('mx-2')
            $('.partner18').removeClass('mx-2')
            $('.partner17').addClass('mx-auto')
            $('.partner18').addClass('mx-auto')
        }
        var usecases = $('.use').height();

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
        $('#token-m').on('click',(e)=>{
            e.preventDefault();
            $(window).scrollTop(toptk-80);
            
            $('#my-nav').removeClass('move')
            $('.blur').css('display','none');
        })
        $('#partner-m').on('click',(e)=>{
            e.preventDefault();
            $(window).scrollTop(toppn-80);
            $('#my-nav').removeClass('move')
            $('.blur').css('display','none');
        })
        $('#blog-m').on('click',(e)=>{
            e.preventDefault();
            $(window).scrollTop(topblg-80);
            $('#my-nav').removeClass('move')
            $('.blur').css('display','none');
        })
        $('#contact-m').on('click',(e)=>{
            e.preventDefault();
            $(window).scrollTop(topctt);
            $('#my-nav').removeClass('move')
            $('.blur').css('display','none');
        })
        $('#home-m').on('click',(e)=>{
            e.preventDefault();
            $(window).scrollTop(0);
            $('#my-nav').removeClass('move')
            $('.blur').css('display','none');
        })
    })
$(window).on('load resize',()=>{
        var wd = $(window).width();
        var offsetus = $('.use').offset();
        var topus = offsetus.top;  
        var usecases = $('.use-cases').height();
    if(wd <=576){
        $('.ads-content__left').addClass('order-1')
    }else{
    }
    // $('.ecommerce').css('margin-top',usecases -105 + 'px')
    // if (wd < 786) {
    //     $('.ecommerce').css('margin-top',usecases -45 + 'px')
    // }
    if (wd >1600) {
        $('main').css('margin-top',`${Math.abs(usecases - 20)}px`)
    }else if(wd >786){
        $('main').css('margin-top',`${Math.abs(usecases - 140)}px`)
    }else{
        $('main').css('margin-top',`${Math.abs(usecases - 90)}px`)
    }
    
    // $('.header-toggler--mod').attr('data-target','');
    //     $('.blog-block').on('click',()=>{
    //         // $(this).find('.txt-toggle').toggle();
    //         // console.log($(this).find('.txt-toggle').slideUp())
    //         $(this).find('.txt-toggle').slideToggle()
    //         // $(selector).slideDown();
            
    //     })
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
// $('.blog-block').find('.txt-toggle').on('click',()=>{
//     $(this).toggle();
// })
});