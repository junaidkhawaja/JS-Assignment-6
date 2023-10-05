// Q1

var todayDate = new Date();
document.write(todayDate);


// line break
document.write("<br><br>")

// Q2
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

function fullName() {
alert("Welcome " + firstName + " " + lastName + "!");
}
fullName();

// Q3

var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");

function addNums() {
    alert(firstNum + secondNum);
}
addNums();

// Q4


var numberOne = +prompt("Add 1st Number");
var operator = prompt("Add your operator");
var numberTwo = +prompt("Add 2nd number");

function calc(n1,op,n2) {
if (op === '+') {
    return n1 + n2;
}
else if (op === '-') {
    return n1 - n2;
}
else if (op === '*') {
    return n1 * n2;
}
else if (op === '/') {
    return n1 / n2;
}
else if (op === '%') {
    return n1 % n2;
}

}
var calcRes = calc(numberOne,operator,numberTwo);
alert(calcRes);


// Q5
var askNum = +prompt("Enter number to square");
function square(num){
    return num * num;
}

var squareNum = square(askNum);
alert(squareNum);

// Q6

function factorial(){
    var anumber;
    var afactorial;
    afactorial = 1;
    anumber = +prompt("Write number to find it's factorial value");
    for(var i = 1; i <= anumber; i++)  {
        afactorial = afactorial * i;
    }
    alert("Factorial of the number " + anumber + " is " + afactorial);
    }

factorial();

// Q7
var startNum = +prompt("Write Start Number");
var endNum = +prompt("Write End Number");

function counting() {
    for (var i = startNum - 1;i < endNum; i++) {
        var count = i + 1;
        document.write("<br>" + count + "<br>");
    }
}
counting();

// Q8
// didn't learnt yet

// Q9

var width = +prompt("Enter width of the rectangle.");
var height = +prompt("Enter height of the rectangle.");

function rectArea(w,h) {
    var a = w * h
    alert(a);
}
rectArea(width,height);

// Q10

function palindrome() {
var getWord = prompt('Enter a word to check if it is palindrome word');
var word = ""
for(var d = getWord.length - 1; d >= 0; d--) {
    console.log(getWord[d]); 
        word += getWord[d]   
}

if (word === getWord) {
    alert("Word is palindrome");
}
else {
    alert("Word is not palindrome");
}
}

palindrome();


// Q11, Q12, Q13, Q14 didn't understand