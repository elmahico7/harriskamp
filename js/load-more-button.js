$( document ).ready(function (){
  var itemsToShow = 6;
  $(".load").slice(0, itemsToShow).show();
  $(".btn-load-more").on('click', function (e) {
      e.preventDefault();
      var hiddenItems = $(".load:hidden");
      hiddenItems.slice(0, itemsToShow).show();
      if($(".load:hidden").length == 0){
         $(".btn-load-more").fadeOut('slow');
      }
    })
});
