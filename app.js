'use strict';
/* 
var correct = 0

var user = prompt('What is your name?')
console.log('the users name is ' + user);

alert('Hi there ' + user + ' ! Welcome to my page' + ' ! Lets play a game, only yes/no answers will be accepted');

// first gusses question
var hair = prompt('Is my hair color black').toLowerCase();
console.log('color of hair', hair);

if (hair === 'yes') {
    alert('You got it!')
    correct++
}

if (hair === 'no') {
    alert('Nope, my hair color is black!')
}


// second guess question
var eyes = prompt('Is my eye color blue?').toLowerCase();
console.log('color of eyes', eyes);

if (eyes === 'yes') {
    alert('No, my eyes color is Brown')
    correct++
}

if (eyes === 'no') {
    alert('You are correct, my eyes color is brown')
}

//third guess question
var dog = prompt('Do I have a dog?').toLowerCase();
console.log('if i have a dog', dog);

if (dog === 'yes') {
    alert('Correct! I have a french bulldog ')
    correct++
}

if (dog === 'no') {
    alert('I do have a french bulldog')
}

//fourth guess question
var kid = prompt('Do I have a kid?').toLowerCase();
console.log('if i have a kid', kid);

if (kid === 'yes') {
    alert('Right!')
    correct++
}

if (kid === 'no') {
    alert('I have a 8 months baby boy')
}

//fifth guess question 

var SDE = prompt('Am I a SDE?').toLowerCase();
console.log('if i am a SDE', SDE);

if (SDE === 'yes') {
    alert('You must know that from my Linkedln')
    correct++
}

if (SDE === 'no') {
    alert('I just became a SDE since I learned coding from code fellows')
}

//sixth guess question
var number;
var counter = 1;

while (number !== 6) {
    number = parseInt(prompt('Guess,what is my fav number beween 1-10?'));

    if (number === NaN || number === null) {
        alert('please enter a real number');
        counter++;
    } else if (number < 6) {
        alert('you guessed too low');
        counter++;
    } else if (number > 6) {
        alert('you guessed too high');
        counter++;
    } else if (number = 6) {
        alert('correct')
        correct++
        break;
    }
    if (counter === 5) {
        alert('My fav number is actually 6');
        break;
    }
}

console.log('current count:', counter);
*/
// seventh guess question

var company = ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Apple', 'Cisco System'];
var answer = prompt('what is your fav tech company');
var counter = 1
var user = 'Anna' // note fake name
var correct= 0 // note fake #

while (counter <= 6 ) {

        if (company.includes(answer)) {
            alert('Great! I like' + '' + answer + 'too');
            correct++
            break;
        }else {
            answer=prompt ('try again') 
            counter++
            
        }

       if (counter === 6){
        alert('Those are what we have' + '' + company)
        break;
       }

    }
    


alert('Thank you for visiting my page ' + user + ' you are corrected for ' + correct + ' out of 7 questions' + ' ! See you next time!');