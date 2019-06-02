$('.contenedor_productos').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: $('#prev'),
  nextArrow: $('#next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 670,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});