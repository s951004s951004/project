$(document).ready(function(){

    // lightbox 效果
  
    lightbox.option({
      'resizeDuration': 2000,
      'wrapAround': true
    });
  
    // 下拉式選單功能
  
    $(".dropdown").click(function(event){
      event.preventDefault()
      $(".dropdown").toggleClass("active");
      $(".dropdownopen").slideToggle(3000);
    })
  
    $(".testdown").click(function(event){
      event.preventDefault()
      $(".testdown").toggleClass("active");
      $(".testdownopen").slideToggle(3000);
    })
  
    //swiper
  
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      allowTouchMove:true,
      effect:'cube',
    
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
  
  