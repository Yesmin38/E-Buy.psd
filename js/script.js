$(window).on('scroll',function(){
    if($(this).scrollTop()>400){
        $('.backup').fadeIn(1000)
    }else{
        $('.backup').fadeOut(1000) 
    }
    $('.backup').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
        },2500)
    })
    

    $('.banner-slider').slick({
        prevArrow:'<i class=" banner-icon  fas fa-arrow-left"></i>',
        nextArrow:'<i class="banner-icon  fas fa-arrow-right"></i>',
        dots:true,
        dotsClass:'banner-dots',
       
    })
})
$(function(){
    $(window).on('scroll',function(){
       // $('.main_header').addClass('menu_animate')
       if($(window).scrollTop() >$('.main_header').height() ){
        $('.main_header').addClass('menu_animate') 
       }else{
        $('.main_header').removeClass('menu_animate')  
       }
    }) 
})


$(window).on('load',function(){
    
    $('.preload').fadeOut(500)
    
})