
var quoteBook = [
  {
    "quote": "Life is short, Live like you will die tomorrow",
    "writer": "Anonymous"
  } , 
  {
    "quote": "Do not judge me by the chapter you walked in on",
    "writer": "Someone"
  } ,
   {
    "quote": "Everyday may not be good but there is something good in everyday",
    "writer": "Anonymous"
  } 
  
]; 

var buttonPressCount=0; 
var totalQuotes = quoteBook.length; 

function quoteMachine(){
  buttonPressCount++; 
  var index = buttonPressCount % totalQuotes; 
  
  var quoteText = quoteBook[index].quote; 
  var writerText = quoteBook[index].writer; 
  
  document.getElementById("quote").innerHTML =quoteText; 
  document.getElementById("writer").innerHTML = writerText;   
}

var colors = [ , "#DFE2DB" , "#FFF056" , "#C63D0F" , "#005A31" , "#CBE32D" , "#74AFAD" , "#DE1B1B" , "#E9E581"]; 

$(document).ready(function() {
   $('button').click(function() {
       $("body").css("background-color", "red");
	   $("button").css("background-color" , "red"); 
	   $("#quote").css("color" , "red"); 
   });
});



