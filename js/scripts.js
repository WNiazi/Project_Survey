$(document).ready(function() {
  $("form#form_survey").submit (function(event) {
      event.preventDefault();
      const number1 = parseInt($("#question1").val());
      const number2 = parseInt($("#question2").val()); 
      const number3 = parseInt($("#question3").val());
      const number4 = parseInt($("#question4").val()); 
      const number5 = parseInt($("#question5").val()); 
    
      const result = (number1 + number2 + number3 + number4 +number5);
      
   
  if (result <=6) {
      $('#Ruby').show();
    } else if (result >=6 && result <= 10) {
      $('#C#').show();
    } else {
      $('#JavaScript').show();
    }
  }); 
});
