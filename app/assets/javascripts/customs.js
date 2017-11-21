function goBack() {
    window.history.back();
}

$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!")
  $( ".fb-btn" ).prepend( "<span><i class='fa fa-facebook-official'></i></span>" );
  //$( ".search-btn" ).text("Search")append( "<span><i class='fa fa-facebook-official'></i></span>" );

  var current = location.pathname;
  $('#footer a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('active');
      } else {
        if($this.attr('href').indexOf(current) !== 1){
      	 $this.addClass('no-active');
      }
    }
  })
})