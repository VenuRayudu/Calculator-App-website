const display = document.getElementById("display");

function appenToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
function clearDisplay2(){
    display.value = display.value.toString().slice(0, -1);
}