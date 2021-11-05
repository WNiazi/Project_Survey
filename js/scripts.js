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
              let totalVal="Ruby";
              $("#language").text(totalVal);
            } else if (result >=6 && result <= 11) {
              let totalVal="C#"; 
              console.log ("is this working")
              $("#language").text(totalVal);
            } else {
              let totalVal="JavaScripts";
              $("#language").text(totalVal);
            }

            $("#results").show(); 
          });
        });      

