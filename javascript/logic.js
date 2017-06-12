
// var quoteBook = [
  // {
    // "quote": "Life is short, Live like you will die tomorrow",
    // "writer": "Anonymous"
  // } , 
  // {
    // "quote": "Do not judge me by the chapter you walked in on",
    // "writer": "Someone"
  // } ,
   // {
    // "quote": "Everyday may not be good but there is something good in everyday",
    // "writer": "Anonymous"
  // } 
  
// ]; 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(" TESTING RANDOM FUNCTION" + getRandomInt(0,10));

// var buttonPressCount=0; 
// var totalQuotes = quoteBook.length; 

// function quoteMachine(){
  // buttonPressCount++; 
  // var index = buttonPressCount % totalQuotes; 
  
  // var quoteText = quoteBook[index].quote; 
  // var writerText = "-" + quoteBook[index].writer; 
  
  // $("#quote").fadeOut(function(){
	  // $(this).text(quoteText).fadeIn(); 
  // });
  
  // $("#writer").fadeOut(function() {
	  // $(this).text(writerText).fadeIn(); 
	
  // }); 
  
  
  //document.getElementById("quote").innerHTML =quoteText; 
  //document.getElementById("writer").innerHTML = writerText;   
// }

var colors = [ "#DFE2DB" , "#FFF056" , "#C63D0F" , "#005A31" , "#CBE32D" , "#74AFAD" , "#DE1B1B" , "#E9E581"]; 

function hideAfterTime(classer, valuer){
	 
	setTimeout(function() {
			$(classer).css('opacity' , valuer); 
	} , 5000); 
}

function vibrateButton() {
	setInterval(function() {
		$('.quote-button').addClass("animated pulse"); 
		console.log('vibrate hunu parney ho');
		//setTimeout('.quot')
		
	}, 5000);
	
	setInterval(function() {
		$('.quote-button').removeClass("animated pulse"); 
		console.log('class removed');
	}, 6000);
	console.log('class remove hunu parney ho');
}

var totalQuote=0; 

$(document).ready(function() {
	
	vibrateButton(); 
	var quoteCount=-1; 
	var jsonObject=0; 
	 
   $.getJSON("https://api.myjson.com/bins/1p8cb", function(json) {
	   jsonObject = json; 
	   
	   $.each( json.array , function (index , element) {
		   totalQuote++; 
		   console.log("MEME: " + json.array[1]['quote']); 
		});
		
	});
	
	console.log("totalQuote: " + totalQuote ); 
	

   $('button').click(function() {
	   var index = getRandomInt(0,6); 
	   var colorCode = colors[index]; 
	
	   quoteCount++;
	   quoteCount = quoteCount%totalQuote; 
	   
	   console.log("quoteCount: " + quoteCount + " " + "totalQuote: " + totalQuote ); 
	   console.log("STRING JSON: "+JSON.stringify(jsonObject));
	   
	   var quoteString = jsonObject.array[quoteCount]['quote'];
	   var writerString = jsonObject.array[quoteCount]['author']; 
	   
	   console.log(quoteString +" --- " + writerString); 
	   
		
		$("#quote").fadeOut(function(){
			$(this).text(quoteString).fadeIn(); 
		});
  
		$("#writer").fadeOut(function() {
			$(this).text(writerString).fadeIn(); 
		}); 
	   
	   console.log(colorCode);
       $("body").css("background-color", colorCode);
	   $("button").css("background-color" , colorCode); 
	   $("#quote").css("color" , colorCode); 
	   $("#writer").css("color" , colorCode); 
   });
   
	console.log("akjdhakd");
	
   
  
	
	$('.howUse').click(function() {
		$('.howUseBlock').css('opacity' ,'1');
		hideAfterTime(".howUseBlock" , 0); 
		
		
	}); 
	
	$('.devDetail').click(function() {
		$('.devDetailBlock').css('opacity', 1);
		hideAfterTime(".devDetailBlock", 0);
	}); 
		
	
	$('#twitter').click(function() {
		console.log("FCS");
		alert("Feature coming soon");
		
	}); 

});



