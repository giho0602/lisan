var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// section04 tab

$('.sec04-tab-01').click(function(){
  $('.sec04-tab1').css('display', "block");
  $('.sec04-tab2').css('display', "none");
  $('.sec04-tab-01').css('background', 'black').css('color', '#fff');
  $('.sec04-tab-02').css('background', 'none').css('color', '#000');
});
$('.sec04-tab-02').click(function(){
  $('.sec04-tab1').css('display', "none");
  $('.sec04-tab2').css('display', "block");
  $('.sec04-tab-02').css('background', 'black').css('color', '#fff');
  $('.sec04-tab-01').css('background', 'none').css('color', '#000');
});