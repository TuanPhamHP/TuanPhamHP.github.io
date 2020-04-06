$(document).ready(function () {
    $(window).on('scroll',()=>{
        var offset = $(window).scrollTop();
        if(offset >= 160){
            $('.navbar--wrapper').addClass('sticky')
        }else{
            $('.navbar--wrapper').removeClass('sticky')
        }
    })

});