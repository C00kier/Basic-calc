let result = 0;
let operationsString = "";
let numberInput = "";
let currentOperation = "";
let isOperatorPlaced = true;
let isFirstOperation = true;
let canReplaceOperator = false;
let isOutcomeFunction = false;

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
plusMinusByID.addEventListener("click", e => plusMinus());
commaByID.addEventListener("click", e => makeComma());



//Number buttons
function buttonNumber(num)
{
    numberInput += num;
    operationsString += num;
    calculationsByID.innerHTML = operationsString;
}

//Operator buttons + result button
function actions(action)
{
    calculations();  
    roundTo6Numbers();

    currentOperation = action;
    operators();

    numberInput = "";
    calculationsByID.innerHTML = operationsString;
}

function calculations()
{
    if(isFirstOperation === true)
    {
        result = Number(numberInput);
        isFirstOperation = false;
    }
    else
    {
        switch(currentOperation)
        {
            case "+":
                result += Number(numberInput);
            break;
            case "-":
                result -= Number(numberInput);
            break;
            case "*":
                result *= Number(numberInput);
            break;
            case "/":
                result /= Number(numberInput);
            break;
        }
    }
}

function roundTo6Numbers()
{
    let isDotInResult = false;
    for(const char of result.toString())
    {      
        if(char === ".")
        {
            const afterDot = result.toString().split(".");
    
            if(afterDot[1].length > 6)
            {              
                showResultByID.innerHTML = result.toFixed(6);
            }
            isDotInResult = true;
        }
        else if(isDotInResult === false)
        {
            showResultByID.innerHTML = result;
        }
    }  
}

function operators()
{
    if(numberInput === "")
    {
        isOperatorPlaced = true;
    }
    else
    {
        isOperatorPlaced = false;
    }

    if(isOperatorPlaced === false)
    {
        operationsString += " " + currentOperation + " ";
        isOperatorPlaced = true;
        canReplaceOperator = true;
    }
    
    if((currentOperation !== operationsString[operationsString.length - 2]) && canReplaceOperator && isOutcomeFunction === false)
    {
        operationsString = operationsString.substring(0, operationsString.length - 2) + currentOperation + " ";
    }
}

function outcome()
{
    calculations();  
    roundTo6Numbers();
    isOutcomeFunction = true;
    operationsString += " ";
    operators();
    isOutcomeFunction = false;
    numberInput = "";
}

//C Button
function clear()
{
    result = 0;
    operationsString = "";
    numberInput = "";
    currentOperation = "";
    isOperatorPlaced = true;
    isFirstOperation = true;
    canReplaceOperator = false;
    isOutcomeFunction = false;
    
    showResultByID.innerHTML = result;
    calculationsByID.innerHTML = operationsString;
}

//DEL Button
function deleteLast()
{
    if(numberInput.length > 0) 
    {
        operationsString = operationsString.slice(0,-1);
    }
    numberInput = numberInput.slice(0,-1);
    calculationsByID.innerHTML = operationsString;
}

//CE Button
function clearNumber()
{
    if(numberInput.length > 0) 
    {
        operationsString = operationsString.slice(0,- numberInput.length);
    }       
    numberInput = ""; 
    calculationsByID.innerHTML = operationsString;
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
    let isDotInNumber = false;

    for(const char of numberInput)
    {
        if(char === ".")
        {
            isDotInNumber = true;
        }
    }

    if(isDotInNumber === false)
    {
        numberInput += ".";
        operationsString += ".";
        calculationsByID.innerHTML = operationsString;
    }
}

//Sqrt button
function calcSqrt()
{

}


