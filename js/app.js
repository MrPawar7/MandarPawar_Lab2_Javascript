// console.log('hello from the console');
let questions = [{
  title: 'Where is the University of Syracuse?',
  answers: ['Colorado', 'England', 'New York', 'New Hampshire'],
  correct: 2

},
{

title: 'Where is Howard University?',
answers: ['Virginia', 'Washington, D.C.', 'Portugal', 'Cuba'],
correct: 1

},
{

title: 'Where is Stanford University?',
answers: ['California', 'Idaho', 'Texas', 'Stankonia'],
correct: 0

},
{

title: 'Where is Duke University?',
answers: ['South Carolina', 'North Carolina', 'Indiana', 'Alaska'],
correct: 1
}];

let score = 0;
let currentQuestion = 0;

$(document).ready(function(e){
displayQuestion();

$('ul').on('click', 'li', function(e){
  $('.selected').removeClass('selected');
  $(e.currentTarget).addClass('selected');
  $('a').addClass('ready');
});

$('a').click(function(e){
  e.preventDefault();
  if($(e.currentTarget).hasClass('ready')){
    let guess = $('.selected').attr("id");
    checkAnswer(guess);
  } else if ($(e.currentTarget).hasClass('restart')) {
    currentQuestion = 0;
    score = 0;
    $(e.currentTarget).removeClass('restart').text('Submit Answer');
    displayQuestion();
  } else {
    alert('You must select an answer before continuing.')
  }
});

});

function displayQuestion(){
  if(currentQuestion < questions.length){
  updateScore();
  let question = questions[currentQuestion];
$('h2').text(question.title);
$('ul').html('');
$('.ready').removeClass('ready')

for (var i = 0; i < question.answers.length; i++) {
  $('ul').append('<li id="'+i+'">'+question.answers[i]+'</li>');
}
} else {
  showSummary();

}
}

function showSummary() {
  $('.score span').text(score);
  $('ul').html('');
  $('.ready').removeClass('ready').addClass('restart').text('Restart Quiz');
  $('h2').text('Congratulations! You scored ' + (score/questions.length)*100 + '%');

}

function checkAnswer(guess){
  let question = questions[currentQuestion];
  if(question.correct == guess){
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function updateScore(){
  $('.questions span').text((currentQuestion+1) + "/" + questions.length);
  $('.score span').text(score);
}
