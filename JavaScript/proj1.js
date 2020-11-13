//function buttonClicked()
//{

 //console.log("Button Clicked");
 //btn.removeEventListener("Clicked",buttonClicked);


//var customText = document.getElementsByClassName('my-name');
//var textArea = document.getElementsByClassName('my-message');

//var result = document.getElementById('text')

//result.innerHTML = "Hello, " +customText[0].value +"<br/>";//class always use list so we have to use [0] to get it's first element.

 //console.log(textArea);
 //result.innerHTML += "Message: " +textArea[0].value;
//}

//jQuery
$(document).ready(function(){

//alert("Loaded");

$('#text').html("Click the button to see next");//use html for id
//$('.my-name').val("Enter your name.");//use val for val

$('#go-button').on('click',function(){         //insted of click uoy can use mouseenter,mouseup and mousedown or insted of on you can us hover.

 alert("Great job!");

});



});
