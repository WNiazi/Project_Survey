$(document).ready(function() {
  $("form#form_survey").submit (function(event) {
      event.preventDefault();
      const number1 = parseInt($("#question1").val());
      const number2 = parseInt($("#question2").val()); 
      const number3 = parseInt($("#question3").val());
      const number4 = parseInt($("#question4").val()); 
      const number5 = parseInt($("#question5").val()); 
    
      const result = (number1 + number2 + number3 + number4 +number5);
      // $('#results')text(result);


  if (result <=6) {
      $('#results').hide();
      $('#results1').show();
    } else if (result >=6 && result <= 10) {
      $('#results').hide();
      $('#results2').show();
    } else { 
      $('#results').hide();
      $('#results3').show();
    }
  }); 
});
