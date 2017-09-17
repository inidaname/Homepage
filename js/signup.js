$(document).ready(function(){
  function toggleForms(button, target){
    $("#signup-buttons .btn").removeClass("highlight");
    button.addClass("highlight");
    $(".toggled-content").hide();
    target.show();
  }
  
  $("#signup-button").on("click", function(){
    toggleForms($(this), ($("#signup-content")));
  });
  
   $("#signin-button").on("click", function(){
     toggleForms($(this), ($("#signin-content")));
  });                                                 
});