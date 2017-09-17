$(document).ready(function(){
  function toggleForms(button, target){
    console.log(target);
    $("#signup-buttons .btn").removeClass("highlight");
    button.addClass("highlight");
    $(".toggled-content").fadeOut();
    target.fadeIn();
  }
  
  $("#signup-button").on("click", function(){
    toggleForms($(this), ($("#signup-content")));
  });
  
   $("#signin-button").on("click", function(){
     toggleForms($(this), ($("#signin-content")));
  });                                                 
});