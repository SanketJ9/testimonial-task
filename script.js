
// const carouselContent = Array.from(carouselInner.children)


// carouselContent.forEach(item => {
//     const duplicateItem = item.cloneNode(true);

//     carouselInner.appendChild(duplicateItem);
    
//         // carouselInner.style.animation = "move 18s linear Infinite"
// })


// $(window).on('resize', function(){
//     carouselInner.style.transform = `translate(-${(carouselCard[0].offsetWidth / 2) + $(".testimonials-cont .inner").css("gap").slice(0,2)*2}px, 10px)`
// });

// $(".slick-current").css("margin-top", "-50px");



// To transform vertically on load
$(".slick-slide").each(function( ele ) {
    
    if($(this).data("slick-index") % 2 == 0){
        // $(this).css("transform","translate(0,-100px)")
        $(this).addClass("ontop")
    }else{
        // $(this).css("transform","translate(0,0)")
        $(this).removeClass("ontop")
    }
});

// To change transform value on change of slides
$('.testimonials-cont').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    $(".slick-slide").each(function( ele ) {
        if($(this).hasClass("ontop")){
            $(this).removeClass("ontop")
        }else{
            $(this).addClass("ontop")
        }
      });
});


