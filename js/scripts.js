const question1 = $("#question1").val();
const question2=$("#question2").val(); 
const question3=$("#question3").val();
const age = $("input:radio[name=age]:checked").val(); 
const question5=$("#question5").val(); 

const question1 =document.querySelector ("box1");
const question2 =document.querySelector ("box2");
const question3 =document.querySelector ("box3");
const question4 =document.querySelector ("box4");
const question5=document.querySelector ("box5");

const container=document.querySelector("container"); 
const box6 =document.querySelector ("box6"); 

//first question 
//first whole display none
box1.addEventListener("click", function() {
  question1.style.display="none";
  question2.style.display="block";
}); 
