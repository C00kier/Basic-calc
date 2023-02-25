let result = 0;
let stringHolder = "";
let number1 = "";
let operation = "";
let isOperatorPlaced = true;
let isFirstOperation = true;
let canReplaceOperator = false;

//tekst
const showResultByID = document.getElementById("showResult");
const calculationsByID = document.getElementById("previousCalculations");

//przyciski
const button1ByID = document.getElementById("button1");
const button2ByID = document.getElementById("button2");
const button3ByID = document.getElementById("button3");
const button4ByID = document.getElementById("button4");
const button5ByID = document.getElementById("button5");
const button6ByID = document.getElementById("button6");
const button7ByID = document.getElementById("button7");
const button8ByID = document.getElementById("button8");
const button9ByID = document.getElementById("button9");
const button0ByID = document.getElementById("button0");
const addByID = document.getElementById("addButton");
const subtractByID = document.getElementById("subtractButton");
const multiplyByID = document.getElementById("multiplyButton");
const divisionByID = document.getElementById("divisionButton");
const clearByID = document.getElementById("clearButton");
const resultByID = document.getElementById("resultButton");
const deleteLastByID = document.getElementById("deleteButton");
const deleteNumberByID = document.getElementById("clearWholeNumber");
const sqrtByID = document.getElementById("sqrtButton");
const plusMinusByID = document.getElementById("plusMinusButton");
const commaByID = document.getElementById("commaButton");

//kliknięcie przycisku
button1ByID.addEventListener("click", e => buttonNumber("1"));
button2ByID.addEventListener("click", e => buttonNumber("2"));
button3ByID.addEventListener("click", e => buttonNumber("3"));
button4ByID.addEventListener("click", e => buttonNumber("4"));
button5ByID.addEventListener("click", e => buttonNumber("5"));
button6ByID.addEventListener("click", e => buttonNumber("6"));
button7ByID.addEventListener("click", e => buttonNumber("7"));
button8ByID.addEventListener("click", e => buttonNumber("8"));
button9ByID.addEventListener("click", e => buttonNumber("9"));
button0ByID.addEventListener("click", e => buttonNumber("0"));
addByID.addEventListener("click", e => actions("+"));
subtractByID.addEventListener("click", e => actions("-"));
multiplyByID.addEventListener("click", e => actions("*"));
divisionByID.addEventListener("click", e => actions("/"));
clearByID.addEventListener("click", e => clear());
resultByID.addEventListener("click", e => outcome());
deleteLastByID.addEventListener("click", e => deleteLast());
deleteNumberByID.addEventListener("click", e => clearNumber());
sqrtByID.addEventListener("click", e => calcSqrt());
sqrtByID.addEventListener("click", e => calcSqrt());
plusMinusByID.addEventListener("click", e => plusMinus());
commaByID.addEventListener("click", e => makeComma());



//Number buttons
function buttonNumber(num)
{
    number1 += num;
    isOperatorPlaced = false;
    stringHolder += num;
    calculationsByID.innerHTML = stringHolder;
}

//Operator buttons
function actions(action)
{
    if(isFirstOperation === true)
    {
        result = Number(number1);
        isFirstOperation = false;
    }
    else
    {
        calculations();
    }

    operation = action;
    showResultByID.innerHTML = result;

    if(isOperatorPlaced === false)
    {
        stringHolder += " " + operation + " ";
        isOperatorPlaced = true;
        canReplaceOperator = true;
    }

    if((operation !== stringHolder[stringHolder.length - 2]) && canReplaceOperator)
    {
        stringHolder = stringHolder.substring(0, stringHolder.length - 2) + operation + " ";
    }
    number1 = "";
    calculationsByID.innerHTML = stringHolder;
}

//C Button
function clear()
{
    result = 0;
    stringHolder = "";
    number1 = "";
    operation = "";
    isOperatorPlaced = true;
    isFirstOperation = true;
    canReplaceOperator = false;
    
    showResultByID.innerHTML = result;
    calculationsByID.innerHTML = stringHolder;
}

//do napisania na nowo 
function outcome()
{
    showResultByID.innerHTML = result;
}

function calculations()
{
    switch(operation)
    {
        case "+":
            result += Number(number1);
        break;
        case "-":
            result -= Number(number1);
        break;
        case "*":
            result *= Number(number1);
        break;
        case "/":
            result /= Number(number1);
        break;
    }
}

//DEL Button
function deleteLast()
{
    if(number1.length > 0) 
    {
        stringHolder = stringHolder.slice(0,-1);
    }
    number1 = number1.slice(0,-1);
    calculationsByID.innerHTML = stringHolder;
}

//CE Button
function clearNumber()
{
    if(number1.length > 0) 
    {
        stringHolder = stringHolder.slice(0,- number1.length);
    }       
    number1 = ""; 
    calculationsByID.innerHTML = stringHolder;
}

//Plus minus button
function plusMinus()
{
    result = -result;
    showResultByID.innerHTML = result;
}

//Comma button
function makeComma()
{
    number1 += ".";
    stringHolder += ".";
    calculationsByID.innerHTML = stringHolder;
}

//Sqrt button
function calcSqrt()
{

}


