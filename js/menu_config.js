$(document).ready(function(){
  
  $('#toggleMenu').on('click', function(e){
    $( ".items_nav_movil" ).toggle( "slow" );
  });

  $('.item_nav').on('click', function(e) {
  
    var element = e.currentTarget.hash;
      $('*').removeClass('padding_top');  
      $(element).addClass('padding_top');
  })

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