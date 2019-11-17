$(function(){
    $(".nav-toggle, nav-close").click(function(e){
         e.preventDefautl();
         $('.nav').toggleClass('active');
    });
});