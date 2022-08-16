console.log("hello");
$(document).ready(function(){
    $('.container_reviews').slick({
        arrows:false,
        dots:true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    })
})

