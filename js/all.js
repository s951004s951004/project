$(document).ready(function(){

    // lightbox 效果
  
    lightbox.option({
      'resizeDuration': 2000,
      'wrapAround': true
    });
  
    // 下拉式選單功能
  
    $(".dropdown").click(function(event){
      event.preventDefault()
      $(this).toggleClass("active");
      $(this).siblings("ul").slideToggle(3000);
      $(this).parent().siblings().find("ul").slideUp(3000);
      $(this).parent().siblings().find("a").removeClass();
    })
  
    //swiper
  
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      allowTouchMove:true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    
    });
  
    //scroll to top
    
    $(".top a").click(function(event){
      event.preventDefault();
      $("html,body").animate({
              scrollTop:0
      },3000)
    });
  
  });
  
  