$(document).ready(function(){

    // hero slider

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        navText:['PREV' , 'NEXT'],
        smartSpeed:1000,
        dots:false,
        nav:false,
        responsive:{
            0:{
             nav:false,
            },
            768:{
                nav:true,

            } 
        }
    })


    //project slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        smartSpeed:1000,
        dots:false,
        navText:['PREV' , 'NEXT'],
        margin:24,
        nav:true,
        responsive:{
            0:{
          items:1,
          nav:false,
          margin:0,
            },
            768:{
               items:2, 

            } ,
            1140:{
                items:2,
                center:true,
                dots:true
            }
        }
    })

    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
        responsive:{
          
        }
    })

});