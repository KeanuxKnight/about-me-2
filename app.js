// JS week 1 lab and hw stuff

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);
var correctTally = 0
console.log(correctTally + ' questions answered correctly!')

alert('Hi there, ' + userName + ' I\'m going to ask you some questions about some questions about me please answer Y or N.')


var ans1 = document.getElementById('a1');
function Q1() {
  var answer1 = prompt('Was Noah born in Maryland?');

if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'N'){

  ans1.textContent = 'Nice! I was born on the planet THIS HAS BEEN CLASSIFIED FOR NATIONAL SECUIRTY REASONS THANK YOU CITIZEN'
  console.log('answered correctly the code also ran')
  correctTally += 1
  console.log(correctTally + ' questions right');
} else if (answer1.toLowerCase() === 'Y' || answer1.toUpperCase() === 'Y'){

  ans1.textContent = 'Sorry you are wrong!'
  console.log('answered wrong code did run');
} else {

  ans1.textContent = 'YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ'
  console.log('did not use a valid answer the code ran');
}
}

var ans2 = document.getElementById('a2');
function Q2() {
var answer2 = prompt('Does Noah want to rule the galaxy?');

if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'N'){
  //alert('Wrong actually have a strange desire to....');
  ans2.textContent = 'Wrong actually have a strange desire to....'
  console.log('answered wrong code did run');
} else if (answer2.toLowerCase() === 'Y' || answer2.toUpperCase() === 'Y'){
  //alert('Yes that is right...um...do not tell anyone please ;)');
  ans2.textContent = 'Yes that is right...um...do not tell anyone please'
  console.log('answered correctly the code also ran');
  correctTally += 1
  console.log(correctTally + ' questions right');
} else {
  //alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  ans2.textContent = 'YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ'
  console.log('did not use a valid answer the code ran');
}
}

var ans3 = document.getElementById('a3');
function Q3() {
var answer3 = prompt('Does Noah play guitar?');

if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'N'){
  //alert('Wrong I DO PLAY! Why do you hate me? D: D: D: :( ;_;');
  ans3.textContent = 'Wrong I DO PLAY! Why do you hate me? D: D: D: :( ;_;'
  console.log('answered wrong code did run');
} else if (answer3.toLowerCase() === 'Y' || answer3.toUpperCase() === 'Y'){
  //alert('Yes that is right! You must have a degree in something');
  ans3.textContent = 'Yes that is right! You must have a degree in something'
  console.log('answered correctly the code also ran');
  correctTally += 1
  console.log(correctTally + ' questions right');
} else {
  //alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  ans3.textContent = 'YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ'
  console.log('did not use a valid answer the code ran');
}
}

var ans4 = document.getElementById('a4');
function Q4() {
var answer4 = prompt('Do I have any experience?');

if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'N'){
  //alert('You know me too well...that may be a problem');
  ans4.textContent = 'You know me too well...that may be a problem'
  console.log('answered right code did run');
  correctTally += 1
  console.log(correctTally + ' questions right');
} else if (answer4.toLowerCase() === 'Y' || answer4.toUpperCase() === 'Y'){
  //alert('Yes that is right HAHA JUST KIDDING YOU WERE WRONG HAHAHAHA WRONG WRONG WRONG!');
  ans4.textContent = 'Yes that is right HAHA JUST KIDDING YOU WERE WRONG HAHAHAHA WRONG WRONG WRONG!'
  console.log('answered wong the code also ran');
} else {
  //alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  ans4.textContent = 'YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ'
  console.log('did not use a valid answer the code ran');
}
}

var ans5 = document.getElementById('a5');
function Q5() {
var answer5 = prompt('Do I have a past?');

if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'N'){
  //alert('If only one could undo the past..fix old mistakes. You made a mistake. You were wrong. HAHAHAHA');
  ans5.textContent = 'If only one could undo the past..fix old mistakes. You made a mistake. You were wrong. HAHAHAHA'
  console.log('answered wrong code did run');
} else if (answer5.toLowerCase() === 'Y' || answer5.toUpperCase() === 'Y'){
  //alert('Yes that is right! Um how much exactly do you know?');
  ans5.textContent = 'Yes that is right! Um how much exactly do you know?'
  console.log('answered correctly the code also ran');
  correctTally += 1
  console.log(correctTally + ' questions right');
} else {
  //alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  ans5.textContent = 'YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ'
  console.log('did not use a valid answer the code ran');
}
}


var guesses = 0;

var ans6 = document.getElementById('a6');
function Q6(){
while (guesses < 4){
  var answer6 = parseInt(prompt('How old am I? You have four guesses'));
  console.log(answer6)
  if (answer6 === 25){
    alert('That is right! You can read!');
    console.log('Answered correctly while loop should end');
    correctTally += 1
    console.log(correctTally + ' questions right');
    guesses = 4
  } else if (answer6 > 25){
    guesses += 1
    ans6.textContent = 'WRONG! Guess again! Too high!';

    console.log(guesses + ' guesses used';
  } else if (answer6 < 25) {
    guesses += 1
    ans6.textContent ='Wrong! Too low!';

    console.log(guesses + ' guesses used');
  } else if (typeof(answer6) === 'number') {
    guesses += 1
    ans6.textContent = 'ENTER A NUMBER! WTF IS WRONG WITH YOU IN MY OPINION THE JEDI ARE WRONG I HATE SAND!!!';

    console.log('did not enter a number this code ran';
    console.log(guesses + ' gusses used')
  } else {
    ans6.textContent = 'WTF YOU BROKW IT!';
  }
}
}

var ans6 = document.getElementById('a7');
function Q7(){
var favThings = ['GUITAR', 'CONQUEST', 'CODING', 'LOVE' ]
var favanswer = prompt('What is one of my favorite things? YOU HAVE ONE GUESS USE IT WISELY!').toUpperCase()
var favThingsRight = false;

for (var i = 0; i < favThings.length; i++) {
  if (favanswer === favThings[i]) {
    favThingsRight = true
    i = 4
  }
  console.log('The for loop has run successfully');
}
console.log(favanswer)

if (favThingsRight === true) {
  alert('You were right! YAAAY!');
  correctTally += 1
  console.log(correctTally + ' questions right');
} else {
  ans7.textContent = 'You were wrong!';
}

if (correctTally >= 5) {
  ans7.textContent = 'That game is over! You got ' + correctTally + ' out of 7 questions right!  Wow! ' + userName + '! Your parents must be proud of you!';
} else {
  ans7.textContent = 'The game is over...You got ' + correctTally + ' out of 7 questions right. ' + userName + ', you suck. Did you even get past kindergarten?';
}
}

Q1()
Q2()
Q3()
Q4()
Q5()
Q6()
Q7()
