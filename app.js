alert("JavaScript page Test");
var userName = "Nedal";
document.write(userName);

var mathOperation = 20;
alert(mathOperation + 6);
alert(mathOperation - 6);
alert(mathOperation * 6);
alert(mathOperation / 6);
alert(mathOperation % 6);
alert(mathOperation ** 6);

var mathOperations = prompt("Please enter your number");
if (mathOperations < 0){
alert('This value is valid');
} else if (mathOperations >= 0){
    alert('This value is invalid');
} else {
    alert('Please enter a number');
}