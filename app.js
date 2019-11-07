'use strict';

var user = prompt('What is your name?')
console.log('the users name is ' + user );

alert('Hi there '+ user + ' ! Welcome to my page');

// first gusses question
var hair = prompt('Is my hair color black').toLowerCase();
console.log('color of hair', hair);

if (hair === 'yes'){
    alert('You got it!')
} 

if (hair === 'no'){
    alert('Nope, my hair color is black!')
}


// second guess question
var eyes = prompt('Is my eye color blue?').toLowerCase();
console.log('color of eyes', eyes);

if (eyes === 'yes'){
    alert('No, my eyes color is Brown')
} 

if (eyes === 'no'){
    alert('You are correct, my eyes color is brown')
}

//third guess question
var dog = prompt('Do I have a dog?').toLowerCase();
console.log('if i have a dog', dog);

if (dog === 'yes'){
    alert('Correct! I have a french bulldog ')
} 

if (dog === 'no'){
    alert('I do have a french bulldog')
}

//fourth guess question
var kid = prompt('Do I have a kid?').toLowerCase();
console.log('if i have a kid', kid);

if (kid === 'yes'){
    alert('Right!')
}

if (kid === 'no'){
    alert('I have a 8 months baby boy')
}

//fifth guess question 

var SDE = prompt('Am I a SDE?').toLowerCase();
console.log('if i am a SDE', SDE);

if (SDE === 'yes') {
    alert('You must know that from my Linkedln')
}

if (SDE === 'no'){
    alert('I just became a SDE since I learned coding from code fellows') 
}


alert('Thank you for visiting my page '+ user + ' ! See you next time!');