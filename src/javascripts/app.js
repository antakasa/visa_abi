import './modules'
import {quiz} from './quiz'






$(document).ready(function(){
let i = 0;
$.each(quiz, function(key, value ) {
	console.log($(this)[0]["kysymys"])
   	let uniqueID = "question-" + i; 
   	let parsed = $(this)[0]["kysymys"].replace(/(?:\r\n|\r|\n)/g, '<br />');
    let templateDIV = `<div class="question" id=${uniqueID}> <div class="icon">
           <div class="number">${i + 1}.</div>
            </div> <h3>${parsed}</h3><ul></ul><div class="answer"></div></div>`

	 $("#app").append(templateDIV);

  $.each(value, function(key,value) {
  	let templateQuestion;
  	if (key === "oikea") {
  		templateQuestion = `<li data-correct=1 data-answer=>${value}</li> `
  		$("#question-" + i + " ul").append(templateQuestion);
  	} else if (key === "väärä1" || key === "väärä2"){
  		console.log("Ttättätätä")
  		templateQuestion = `<li data-correct=0 data-answer=>${value}</li> `
  		$("#question-" + i + " ul").append(templateQuestion);
  	} else if (key === "selitys") {
  		console.log("moiii") 
		$("#question-" + i + ".answer").text(value);
  	} else {
  		console.log("virhe!!");
  	}
  });
 i++
})


//   for(i = 1; i < 10; i++) {
// 	let uniqueID = "question-" + i; 
//     let template = `
 
//  <div class="question" id=${uniqueID}> 
//   <h3>1. Razif is an entrepreneur with no set income every month. After establishing his business, he is planning to get a car loan to purchase a new car. With his income of at least RM5,000 a month, which car loan should he get?</h3>
//   <ul>
//     <li data-correct="1" data-answer="That’s correct! Although the interest rate of a variable rate car loan is commonly higher than a conventional loan, it offers Razif the freedom to reduce the interest by making extra payments toward his car loan. <a href='http://www.imoney.my/articles/car-loans-in-malaysia-conventional-vs-variable-rate'>See Car Loans in Malaysia – Conventional vs Variable Rate</a> for more information.
// ">
//       A. Variable Car Loan Rate
//     </li>
//     <li data-correct="0" data-answer="Not quite right. As Razif’s income is not fixed and may sometimes generate higher income through his business, a variable rate car loan offers this the opportunity to save on interest by paying more than the instalment. ">
//       B. Conventional Car Loan
//     </li>
//   </ul>
//   <div class="answer">
//   </div>
// </div>`

//     $('#app').append(template);
// }

var totalQuestions = $('.question').length;

console.log(quiz["kysymys1"]["a"])

let correctAnswer = 0;

$('.question').on('click','li',function(){

  var id = $(this).parents('div').attr('id'),
      answer = $(this).parent('ul').siblings('.answer');
  
console.log(id)

    if($(this).data('correct') == '1'){
      console.log("oigee")
    //  $('<p>' + $(this).data('answer') +'</p>').prependTo(answer);
      $(this).addClass('picked');
      $(this).addClass('correct-holder');
      $(this).siblings().removeClass("incorrect-holder");
      $(this).siblings().removeClass("picked");
      
    } else {
      console.log("väärä")
   	  $(this).addClass('picked');
   	  $(this).siblings().removeClass("picked");
   	  $(this).siblings().removeClass("correct-holder");
   	  $(this).siblings().removeClass("picked");
     // $('<p>' + $(this).data('answer') +'</p>').prependTo(answer);
      $(this).addClass('incorrect-holder')
      //$(this).addClass('incorrect').siblings('[data-correct="1"]').addClass('correct').siblings('[data-correct="0"]').addClass('incorrect');
    }
    //$(this).parent().next('.answer').show().parent('div').addClass('answered');
  
  	if ($(".picked").length === 7) {
  		console.log("nyt se");
  		$("#field").addClass( "active");
  	}
  
});

$('#app').append("<div id='showResults'><a href='#' class='button active' id='field'> Tarkista</a></div>")
//$("#field").attr("disabled", "true");


$('#field').on('click', function(){
	$('#field').remove();

	$( ".correct-holder" ).each(function( index ) {
  		correctAnswer++;
  		$(this).addClass("correct")
	});

	$( ".incorrect-holder" ).each(function( index ) {
  	
  		$(this).addClass("incorrect")
	});

  		console.log(correctAnswer)



});

});






