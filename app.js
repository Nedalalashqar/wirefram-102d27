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