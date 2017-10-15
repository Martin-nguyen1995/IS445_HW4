//assigns the value when user inputs number
const x = prompt("Please enter a number between 2 and 10");
const number = parseInt(x);
//removes element
function remove(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}
//gives the calculation for dividing until 0.000001
function part2Function() {
    var integer = 0;
    var divNum = number;
    while (divNum >= 0.000001){
        divNum = divNum / 2;
        integer = integer + 1;
    }
    document.getElementById("part2").innerHTML = "The number of times to divide the number " + number + " by 2 to get a value less than one millionth is " + integer + ".";
}
//star pattern
function part3Function(){
    //create element 
    var para = document.createElement("P");
    starNum = number + 1; //amount of stars to print
    while (starNum > 0){
        //creates stars to print
        var t = document.createTextNode(Array(starNum).join("*"));
        //creates line break element
        var x = document.createElement("br");
        para.appendChild(t); //appends to element p
        para.appendChild(x); //appends to element p
        document.getElementById('part3').appendChild(para); //appends p to part3 tag
        starNum = starNum - 1; //reduces number to reach 0
   } 
}
    
//runs function
//if function doesnt = value then exit and print error
if (number < 11 && number >1){
    document.getElementById("part1").innerHTML = number;
    window.onload = part2Function()
    window.onload = part3Function()
}
else{
    remove("part3");
    document.getElementById("part1Error").innerHTML = "Your input is" +  " " + number + ". " + "The valid input number is between 2 and 10. Please reload this page and try again.";
}

