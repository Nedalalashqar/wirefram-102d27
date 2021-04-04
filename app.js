var carType = prompt('Plese enter care type');
while(carType !== 'toyota' && carType !== 'kia'){
    carType = prompt('Plese choose toyota or kia');
}
var userInput = prompt('Plese enter number of the car!');

for (var i = 0; i < userInput; i++){
    if(carType == 'toyota') {
        document.write('<img src="https://freevectorlogo.net/wp-content/uploads/2011/04/toyota-logo-vector-400x400.png" />');
    }else {
        document.write('<img src="http://topsat-eg.com/images/p12609f152b4f0d7fadb39d55b10adf51.png" />');
    }
}

var userInput = prompt('Enter from 1 to 10 how much you love Toyota or Kia!');
for(var i=0; userInput; i++){
    if(carType == 'toyota'){

    }
}
function printName() {
    console.log('like page')
}
function printConsole(pram1 , pram2){
    for(var i=pram1; i < pram2; i++){
        console.log(i);

    }
}
printName();
printConsoleNumber(1,100);

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