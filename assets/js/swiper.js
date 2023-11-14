// stores swiper 
var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        270: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        461: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});

// stores swiper 

// company swiper 

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 8,
    spaceBetween: 20,
    freeMode: true,
    slidesPerGroup: 1,
    loop: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        270: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        461: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        993: {
            slidesPerView: 8,
            spaceBetween: 50,
        },
    }
  });

//   company swiper 

// testimonals swiper 
var swiper = new Swiper(".mySwiperTesti", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });