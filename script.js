console.log('Hello world!!!');

var massMark = 24;
var massJohn = 20;
var heightMark = 1.3;
var heightJohn = 1.5;

var bmiJohn = massJohn / (heightJohn*heightJohn);
var bmiMark = massMark / (heightMark*heightMark);


var isMarkHigh = bmiMark > bmiJohn ;

console.log(bmiJohn, bmiMark);
console.log("Is Mark's BMI is higher than John's? " + isMarkHigh);







var ageJohn = 18;

ageJohn >= 20 ? console.log('John you can fuck.') : console.log("John you can't fuck.");
var fuck = ageJohn >= 20 ? 'can' : "can't" ;

console.log("John can do? " + fuck);




var scoreJohn = (89 + 120 + 103);
var scoreMark = (116 + 94 + 123);

var avgScoreJohn = scoreJohn / 3;
var avgScoreMark = scoreMark / 3;

var winner = avgScoreJohn > avgScoreMark ? 'John is winner' : 'Mark is winner';
console.log(winner);

if(avgScoreJohn == avgScoreMark)
{
    console.log('Match is draw');
}
else if(avgScoreJohn > avgScoreMark)
{
    console.log('John is winner');
}
else
{
    console.log('Mark is winner');
}

var scoreMarry = (97 + 134 + 105);
var avgScoreMarry = scoreMarry / 3;

console.log(avgScoreJohn, avgScoreMark, avgScoreMarry);


if(avgScoreJohn == avgScoreMark == avgScoreMarry)
{
    console.log('Match is draw');
}
else if(avgScoreJohn > avgScoreMark && avgScoreJohn > avgScoreMarry)
{
    console.log('John is winner');
}
else if(avgScoreMark > avgScoreMarry)
{
    console.log('Mark is winner');
}
else
{
    console.log('Marry is winner');
}

function calculateAge(age)
{
    return 2018 - age;
}

function calculateRetirement(age, firstname)
{
    var age = calculateAge(age);
    var retirement = 65 - age;
    console.log(firstname + ' retires in ' + retirement + ' years.');
}

calculateRetirement(1999,'Akshit');
calculateRetirement(1998,'Suru');





var whatDoYouDo = function(job, personName)
{
    switch(job)
    {
        case 'teacher':
            return personName + " do teach";
        case 'designer':
            return personName + " do design";
        default:
            return personName + " do something else";
    }
}

var display = whatDoYouDo('teacher','Akshit');
console.log(display);



function something(x, y)
{
    switch(x)
    {
        case 1:
            return y + ' do nothing';
        case 2:
            return y + ' do something';
        default:
            return y + ' fuck that shit';
    }
}

console.log(something(1,'viral'));













var john = ['john', 'jane', 1990, false, 'designer'];
john[john.length] = 'blue';
console.log(john);

john.push('akshit');
console.log(john);

john.unshift('Mr');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? "he is not designer" : "he is designer";
console.log(isDesigner);
console.log(john.indexOf('designer'));