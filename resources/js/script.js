$(document).ready(function(){
    
    // Sticky Navbar
    $(".js--services").waypoint(function(direction){
        if (direction == "down"){
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
    });
    
    // Active link 
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    })
    
    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    //TestimonialSlider(OwlCarousel)
    $('.owl-carousel').owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            578: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    
});

function openNav() {
    document.getElementById('nav-menu').style.height = "100%";
}
function closeNav() {
    document.getElementById('nav-menu').style.height = "0%";
}
