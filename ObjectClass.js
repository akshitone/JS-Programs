/* 
console.log("Hello")


//function constructor
var john = {
    name: 'John',
    yearOfBirth: 1999,
    job: 'Programmer'
}

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2019 - this.yearOfBirth)
    }
}

//Create function outside it...

// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth)
// }

Person.prototype.lastName = 'Tokyo';

//ES2015 class

// class Person {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
// }

var john = new Person('John', 1999, 'Coder')
var mark = new Person('Mark', 1997, 'Professor')
console.log(john)
//console.log(john.lastName)
john.calculateAge();









*/








//Object.create




/*


var personPrototype = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth)
    }
};

var john = Object.create(personPrototype);
john.name = 'John';
john.yearOfBirth = 1999;
john.job = 'Programmer'; 

*/














// var years = [1999, 1997, 1994, 1992, 2002];

// function arrayCalc(arr, fun){
//     var arrayResult = [];
//     for (var i = 0; i < arr.length; i++)
//     {
//         arrayResult.push(fun(arr[i]));
//     }
//     return arrayResult;
// }

// function calculateAge(element){
//     return 2020 - element;
// }

// var ages = arrayCalc(years, calculateAge);

// console.log(ages);

// function isFullAge(element){
//     return (element >= 22);
// }

// var fullAge = arrayCalc(ages, isFullAge);

// console.log(fullAge)


 
























// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you design?');
//         }
//     }
//     else if(job === 'programmer'){
//         return function(name){
//             console.log('can you program, ' + name + '?');
//         }
//     }
//     else{
//         return function(name){
//             console.log(name + ', you are useless.!! motherfucker.');
//         }
//     }
// }

// var programQuestion = interviewQuestion('programmer');

// programQuestion('Akshit');

// interviewQuestion('')('Viral');

// interviewQuestion('designer')('Shrushti');












































// function game(){
//     var score = Math.floor(Math.random()*10);
//     console.log(score >= 5);
// }
// game();

// //IIFE Function

// (function(){
//     var score = Math.floor(Math.random()*10);
//     console.log(score >= 5);
// })();

























// // Closures


// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }

// }


// var retirementUSA = retirement(66);
// retirementUSA(1999);

// retirement(65)(1999);



















//Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'programmer',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         }
//         else if(style === 'friendly')
//         {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         }
//     }
// }

// john.presentation('formal', 'morning')

// var akshit = {
//     name: 'Akshit',
//     age: 20,
//     job: 'coder',
// }
// john.presentation.call(akshit, 'friendly', 'evening')

// john.presentation.apply(akshit, ['formal', 'evening'])


































// (function(){
//     function Question(questions, answers, correct) {
//         this.questions = questions;
//         this.answers = answers;
//         this.correct = correct;
//     }
    
//     Question.prototype.displayQuestion = function(){
//         console.log(this.questions);
//         for (var i = 0; i < this.answers.length; i++)
//         {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(ans) {
//         if(ans === this.correct)
//         {
//             console.log('Correct answer!')
//         }
//         else
//         {
//             console.log('Wrong answer. Try again :)')
//         }
//     }
    
//     var question1 = new Question('Is JavaScript the coolest programming language in the word?', ['Yes','No'], 0);
//     var question2 = new Question('What is the name of this course\'s teacher?', ['Viral','Akshit','Shrushti'], 2);
//     var question3 = new Question('Who are you?', ['Akshit','Shrushti'], 0);
    
    
//     var questions = [question1, question2, question3];
    
//     var n = Math.floor(Math.random() * questions.length);
    
//     questions[n].displayQuestion();
    
//     var answer = parseInt(prompt('Please select the correct answer.'));
    
    
//     questions[n].checkAnswer(answer);
    
// })(); 






























(function(){
    function Question(questions, answers, correct) {
        this.questions = questions;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.questions);
        for (var i = 0; i < this.answers.length; i++)
        {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct)
        {
            console.log('Correct answer!')
        }
        else
        {
            console.log('Wrong answer. Try again :)')
        }
    }
    
    var question1 = new Question('Is JavaScript the coolest programming language in the word?', ['Yes','No'], 0);
    var question2 = new Question('What is the name of this course\'s teacher?', ['Viral','Akshit','Shrushti'], 2);
    var question3 = new Question('Who are you?', ['Akshit','Shrushti'], 0);
    

    function nextQuestion() {

        var questions = [question1, question2, question3];
    
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        var answer = parseInt(prompt('Please select the correct answer.'));

        if (answer !== 'exit')
        {
            questions[n].checkAnswer(answer);
            nextQuestion();
        }
    }
     
    nextQuestion();
    
})(); 











































