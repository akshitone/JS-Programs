console.log("Tip Example!");


function simpleTipCalculate(amount)
{
    var tipPercetage;
    if (amount < 50)
    {
        tipPercetage = 0.2;
    }
    else if(amount >= 50 && amount < 200)
    {
        tipPercetage = 0.15;
    }
    else if(amount >= 200)
    {
        tipPercetage = 0.1;
    }
    return amount * tipPercetage;
}

var billAmount = [124, 48, 268];
var tip = [simpleTipCalculate(billAmount[0]),
            simpleTipCalculate(billAmount[1]),
            simpleTipCalculate(billAmount[2])];

var finalAmount = [billAmount[0]+tip[0],
                    billAmount[1]+tip[1],
                    billAmount[2]+tip[2]];

console.log(tip, finalAmount);




var person = {
    firstName: 'Akshit',
    lastName: 'Mithaiwala',
    birthYear: 1999,
    job: 'Student',
    isMarried: false,
    calculateAge: function()
    {
        return 2018 - this.birthYear;
    }
}

console.log('Age: ' + person.calculateAge());

console.log(person);
console.log(person.isMarried);
var x = 'job';
console.log(person[x]);


person['job'] = 'Developer';
console.log(person.job);



var me = new Object();
me.name = 'Suru';
me.dob = 1998;
me['job'] = 'Designer';

console.log(me);


var john = {
    firstName: 'John',
    mass: 20,
    height: 1.5,
    calculateBmi: function()
    {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark',
    mass: 24,
    height: 1.3,
    calculateBmi: function()
    {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
}

console.log(john.calculateBmi());
console.log(john);

console.log(mark.calculateBmi());
console.log(mark);

var hightestBmi = john.calculateBmi() > mark.calculateBmi() ? john.firstName + ' has highest ' + john.bmi : mark.firstName + ' has highest ' + mark.bmi;
console.log(hightestBmi);

var john = ['john', 'mark', 1999, false, 'jenny'];
console.log(john.length);
for(var i=0 ; i<john.length ; i++)
{
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log("");
for(var i=0 ; i<john.length ; i++)
{
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}






var billAmount = [124, 48, 268, 180, 42];

for(var i=0; i<billAmount.length; i++)
{
    if(billAmount[i] < 50)
    {
        tipPercetage = 0.2;
    }
    else if(billAmount[i] >= 50 && billAmount[i] <= 200)
    {
        tipPercetage = 0.15;
    }
    else if(billAmount[i] > 200)
    {
        tipPercetage = 0.1;
    }
    calculateFinalAmount(billAmount[i],tipPercetage);
}

function calculateFinalAmount(billAmount,tipPercetage)
{
    tipAmount = billAmount * tipPercetage;
}


var akshit = {
    name: 'Akshit Mithaiwala',
    billAmt: [124, 48, 268, 180, 42],
    calculateTip: function()
    {
        this.tips = [];
        this.finalAmt = [];
        for(var i = 0 ; i < this.billAmt.length ; i++)
        {
            var tipPer;
            var bill = this.billAmt[i];
            if(bill < 50)
            {
                tipPer = 0.2;
            }
            else if(bill >= 50 && bill <= 200)
            {
                tipPer = 0.15;
            }
            else if(bill > 200)
            {
                tipPer = 0.1;
            }
            this.tips[i] = bill * tipPer;
            this.finalAmt[i] = bill + this.tips[i];
        }
    }
}


var viral = {
    name: 'Viral Shastri',
    billAmt: [77, 475, 110, 45],
    calculateTip: function()
    {
        this.tips = [];
        this.finalAmt = [];
        for(var i = 0 ; i < this.billAmt.length ; i++)
        {
            var tipPer;
            var bill = this.billAmt[i];
            if(bill < 50)
            {
                tipPer = 0.2;
            }
            else if(bill >= 50 && bill <= 200)
            {
                tipPer = 0.15;
            }
            else if(bill > 200)
            {
                tipPer = 0.1;
            }
            this.tips[i] = bill * tipPer;
            this.finalAmt[i] = bill + this.tips[i];
        }
    }
}


akshit.calculateTip();
viral.calculateTip();
console.log(akshit, viral);

function AvgTip(t)
{
    var sum = 0;
    for(var i=0 ; i<t.length; i++)
    {
        sum = sum + t[i];
    }
    return sum / t.length;
}

akshit.avg = AvgTip(akshit.tips);
viral.avg = AvgTip(viral.tips);

console.log(akshit.avg);
console.log(viral.avg);