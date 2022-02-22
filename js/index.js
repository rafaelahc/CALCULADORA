const display = document.getElementById('visor-result')
const checkDarkMode = document.getElementById('checkbox');
let ent1, ent2, result;
let operatorSign;
let ent2ReservedValue;
let equalButtonClicked = false;
let newNumber;

//Função para os números imprimirem os valores.
function insertNumber(num) {
    //Pega o valor do botão e imprime no visor.
    if (display.value == "+" ||
        display.value == "-" ||
        display.value == "x" || 
        display.value == "÷" ||
        display.value == "%") {
        display.value = num;
    } else {
        display.value += num;
    }
}

//Decimal
function insertPoint() {
    let numero = display.value;
    display.value = numero + ".";
}

//Função para os operadores
function operatorMath(operator) {
    ent1 = display.value;
    display.value = operator;
    operatorSign = operator; //preciso guardar os operadores em uma variável.
}

//Função para o botão limpar
function clearBtn() {
    display.value = '';
    equalButtonClicked = false;
}

//Função do botão de resultado.
function resultBtn() {
    if(operatorSign == "+") {
        if (equalButtonClicked == false) {
            ent2 = display.value;
            result = parseFloat(ent1) + parseFloat(ent2);
            display.value = result;   
            equalButtonClicked = true;
        }else {
            result = parseFloat(result) + parseFloat(ent2);
            display.value = result.toFixed(1);
        }
    } else if (operatorSign == "-") {
        if (equalButtonClicked == false) {
            ent2 = display.value;
            result = parseFloat(ent1) - parseFloat(ent2);
            display.value = result;   
            equalButtonClicked = true;
        }else {
            result = parseFloat(result) - parseFloat(ent2);
            display.value = result;
        }
    } else if(operatorSign == "÷") {
        if (equalButtonClicked == false) {
            ent2 = display.value;
            result = parseFloat(ent1) / parseFloat(ent2);
            display.value = result;   
            equalButtonClicked = true;
        }else {
            result = parseFloat(result) / parseFloat(ent2);
            display.value = result;
        }
    } else if (operatorSign == "x") {
        if (equalButtonClicked == false) {
            ent2 = display.value;
            result = parseFloat(ent1) * parseFloat(ent2);
            display.value = result;   
            equalButtonClicked = true;
        }else {
            result = parseFloat(result) * parseFloat(ent2);
            display.value = result;
        }
    }
}

function percentBtn() {
    ent2 = display.value;
    let percent = ent2 / 100;
    display.value = percent;
    let percentResult;
    if (operatorSign == "+" || operatorSign == "-") {
        let percentResult = percent * ent1;
        display.value = percentResult.toFixed(1);
    } 
    
}

//DARK MODE

checkDarkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
