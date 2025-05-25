$( document ).ready(function (){
  $(".load").slice(0, 4).show();
  $(".btn-load-more").on('click', function (e) {
      e.preventDefault();
      $(".load").slice(0, 12).show();
    
      // $(".load").slice(0, 8).show();
      if($(".load:hidden").length == 0){
         $(".btn-load-more").fadeOut('slow');
      }
    })
});
