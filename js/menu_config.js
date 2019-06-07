$(document).ready(function(){
  
  $('#toggleMenu').on('click', function(e){
    $( ".items_nav_movil" ).toggle( "slow" );
  });

  $('.item_nav, .cta_producto, .cta_hero').on('click', function(e) {
  
    var element = e.currentTarget.hash;
      $('*').removeClass('padding_top');  
      $(element).addClass('padding_top');
  })

  $('.item_nav_movil').on('click', function(){
    $('.items_nav_movil').fadeOut('slow');
  })

})

var hero = document.querySelector('.hero').offsetTop ;
var productos = document.querySelector('#productos').offsetTop -80;
var cocinamos = document.querySelector('#cocinamos_amor').offsetTop-80;
var nosotros = document.querySelector('#sobre_nosotros').offsetTop-80;
var testimonios = document.querySelector('#testimonios').offsetTop-80;
var ordenar = document.querySelector('#ordenar').offsetTop-80;

window.addEventListener('scroll', function(){

  if( hero < window.scrollY ) {
    console.log('arriba')
    document.querySelector('.logo img').style.maxWidth="70px";
  }else {
    document.querySelector('.logo img').style.maxWidth="100px";
  }

  if( productos < window.scrollY && (productos + document.querySelector('.hero').offsetHeight) > window.scrollY ) {
    console.log('arriba')
    document.querySelector('#nav_productos').style.borderBottom="5px solid #FC6170";
  }else {
    document.querySelector('#nav_productos').style.borderBottom="5px solid transparent";
  }

  if( cocinamos < window.scrollY && (cocinamos + document.querySelector('.cocinamos_amor').offsetHeight) > window.scrollY ) {
    console.log('arriba')
    document.querySelector('#nav_cocinamos').style.borderBottom="5px solid #FC6170";
  }else {
    document.querySelector('#nav_cocinamos').style.borderBottom="5px solid transparent";
  }

  if( nosotros < window.scrollY && (nosotros + document.querySelector('.sobre_nosotros').offsetHeight) > window.scrollY ) {
    console.log('arriba')
    document.querySelector('#nav_nosotros').style.borderBottom="5px solid #FC6170";
  }else {
    document.querySelector('#nav_nosotros').style.borderBottom="5px solid transparent";
  }

  if( testimonios < window.scrollY && (testimonios + document.querySelector('.testimonios').offsetHeight) > window.scrollY ) {
    console.log('arriba')
    document.querySelector('#nav_testimonios').style.borderBottom="5px solid #FC6170";
  }else {
    document.querySelector('#nav_testimonios').style.borderBottom="5px solid transparent";
  }

  if( ordenar < window.scrollY && (ordenar + document.querySelector('.ordenar').offsetHeight) > window.scrollY ) {
    console.log('arriba')
    document.querySelector('#nav_contacto').style.borderBottom="5px solid #FC6170";
  }else {
    document.querySelector('#nav_contacto').style.borderBottom="5px solid transparent";
  }

  

  
})


$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});