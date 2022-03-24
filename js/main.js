$(document).ready(function(){
    $('.carousel').carousel({
        interval:2000
    });
});

$(function() {
    
    var winh =$(window).height(),
        upperh=$('.upper-bar').innerHeight(),
        navh=$('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winh -(upperh + navh));

    $('.featured-work ul li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') ==='all'){
        $('.shuffle-images .col-sm').css('opacity',1);
    }
    else {
        $('.shuffle-images .col-sm').css('opacity',.09);
        $($(this).data('class')).parent().css('opacity',1);
    }
    
});

});

