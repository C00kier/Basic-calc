let result = 0;
let stringHolder = "";
let number1 = "";
let number2 = "";
let operation = "";
let state = 0;

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
const deleteWholeNumberByID = document.getElementById("clearWholeNumber");

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
deleteWholeNumberByID.addEventListener("click", e => clearNumber());


//Number buttons
function buttonNumber(num)
{
    if(state !== 1)
    {
        number1 += num;
    }
    else
    {
        number2 += num;
    }

    stringHolder += num;
    calculationsByID.innerHTML = stringHolder;
}

//Operator buttons
function actions(action)
{
    stateManagment();

    operation = action;
    showResultByID.innerHTML = result;
    stringHolder += " " + action + " ";
    calculationsByID.innerHTML = stringHolder;
}

//C Button
function clear()
{
    stringHolder = "";
    calculationsByID.innerHTML = stringHolder;
    state = 0;
    operation = "";
    result = 0;
    number1 = "";
    number2 = "";
    showResultByID.innerHTML = result;
}

//do napisania na nowo
function outcome()
{
    showResultByID.innerHTML = result;
}

function stateManagment()
{
    if(state === 1)
    {
        calculationsFor2Numbers();
        state = 2;
    }
    else if(state === 2)
    {
        calculationsForMoreNumbers();
    }

    if(number1 !== "" && (state === 0))
    {
        state = 1;
    }
}

function calculationsFor2Numbers()
{
    switch(operation)
    {
        case "+":
            result += Number(number1) + Number(number2);
        break;
        case "-":
            result += Number(number1) - Number(number2);
        break;
        case "*":
            result += Number(number1) * Number(number2);
        break;
        case "/":
            result += Number(number1) / Number(number2);
        break;
    }
    number1 = "";
    number2 = "";
}

function calculationsForMoreNumbers()
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
    number1 = "";
}

//DEL Button
function deleteLast()
{
    if(state !== 1)
    {
        if(number1.length > 0) 
        {
            stringHolder = stringHolder.slice(0,-1);
        }
        number1 = number1.slice(0,-1);
    }
    else
    {
        if(number2.length > 0)
        {
            stringHolder = stringHolder.slice(0,-1);
        }
        number2 = number2.slice(0,-1);
    }
    calculationsByID.innerHTML = stringHolder;
}

//CE Button
function clearNumber()
{
    if(state !== 1)
    {
        if(number1.length > 0) 
        {
            stringHolder = stringHolder.slice(0,- number1.length);
        }       
        number1 = "";
    }
    else
    {
        if(number2.length > 0)
        {
            stringHolder = stringHolder.slice(0,- number2.length);
        }
        number2 = "";
    }
    calculationsByID.innerHTML = stringHolder;
}