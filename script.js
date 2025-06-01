const navlinks=document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton=document.querySelector("#menu-open-button")
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", function () {
    document.body.classList.toggle("show-mobile-menu");
})
menuCloseButton.addEventListener('click', ()=>{
    menuOpenButton.click();
})
navlinks.forEach(link =>{
link.addEventListener("click", ()=>menuOpenButton.click());
})

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
  
    loop: true,
    spaceBetween:25,
    grabCursor:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints :{
      0:{
        slidesPerView:0
      },
      768:{
        slidesPerView:3
      },
      1204:{
        slidesPerView:3
      },
    }
    
  
  });