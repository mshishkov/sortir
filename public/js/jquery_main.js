(function($){
$(document).ready(function(){
    $(".main_menu li").click(function(){
        $(".route_content > div").hide();
        $(".main_menu li").removeClass("active");
        $(this).addClass("active");
        $(".route_content").find("."+$(this).data('tab')).show();
    });
    
    
    $( "#users_range" ).slider({
      range: true,
      min: 2,
      max: 4,
      range: "max",
      value: 4,
      slide: function( event, ui ) {
         $(".game_autostart_cnt").text(ui.value);
      }
    });
    
    $( "#bet_range" ).slider({
      range: true,
      min: 50,
      max: 1250,
      step: 25,
      range: "min",
      slide: function( event, ui ) {
         $(".bet_range_cnt").text(ui.value);
      }
    });

    
});
})(jQuery);