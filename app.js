alert('Hello Everyone');
    

var mathoperation=prompt('Please inter your name');
document.write(mathoperation);

console.log(mathoperation);


alert('welcome to car lovers');

var userInput = prompt('please enter car type toyota or kia');
while(userInput !=='toyota' && userInput !=='kia'){
    var userInput = prompt('Please choose toyota or kia');
}

var userInput =prompt('Please enter the number of car');

for (var i = 0; i < userInput; i++){
    if(userInput == 'toyota'){
        document.write('<img alt="toyota" src ="https://toyota.com.jo/sites/default/files/styles/slider_over_1200/public/2021-02/73027%20Toyota%20Websliders%201800x700_1.jpg?h=2c3775ab&itok=PDrcJT6c" width ="200"/>');
        console.log(userInput);

    } else{
        document.write('<img alt="kia" src ="https://www.tech-mag.net/wp-content/uploads/2019/12/2020-kia-k5-kdm-spec.jpg" width ="200"/>');
    }

}

function printName(){
    console.log('car');  
}
function printConsolNmbur(p1 , p2){
    for(var i = p1; i < p2 ; i++){
        console.log(i)
    }
}    
printName();
printConsolNmbur(1,100);