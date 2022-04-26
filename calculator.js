let display = document.querySelector('#display');
let powerbtn = document.querySelector('#onbtn');

function oneValue(){
    display.value += 1;
};
function twoValue(){
    display.value += 2;
};
function threeValue(){
    display.value += 3;
};
function fourValue(){
    display.value += 4;
};
function fiveValue(){
    display.value += 5;
};
function sixValue(){
    display.value += 6;
};
function sevenValue(){
    display.value += 7;
};
function eightValue(){
    display.value += 8;
};
function nineValue(){
    display.value += 9;
};
function zeroValue(){
    display.value += 0;
};
function doubleZeroValue(){
    display.value += "00";
};
function rootOver(){
    display.value = Math.sqrt(display.value);
};
function powerOn(){
    
    if(display.value || display.placeholder == ""){
        display.placeholder = "0";
        display.value = "";
        powerbtn.value = "off";
    }else{
        display.placeholder = "";
        powerbtn.value = "on";
    }
}
function devidedValue(){
    display.value += '/';
};
function percentValue(){
    display.value = display.value/100;
};
function maltiplerValue(){
    display.value += "*";
};
function minusValue(){
    display.value += "-";
};
function plusValue(){
    display.value += "+";
};
function dotValue(){
    display.value += ".";
};
function evalValue(){
    display.value = eval(display.value);
};
function delOneDig(){
    display.value = display.value.slice(0, -1)
};