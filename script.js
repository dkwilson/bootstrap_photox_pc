$(document).ready(function() {
    //close button animation
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    // change properties of nav bar when scrolling
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        };
    })

    //animate mission section when scrolling
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        // console.log(position);
        if(position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    })

    //filtering for gallery posts
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');

        if(value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    })

    //set active filters for gallery filters
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    })

    //animation for pricing cards
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4300) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }

    })
})

