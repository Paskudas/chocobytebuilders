$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        // adaptiveHeight: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 100,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        responsive: [
            
        {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3                     
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2                     
                }
            }, 
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1                     
                }
            }
        ],
        mobileFirst: true,
    });
});  