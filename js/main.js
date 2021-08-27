var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: { //반응형 조건 속성
      320: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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