let operator = '';
let currentValue = '';
let previousValue = '';
let aux;

const btn = document.querySelectorAll('.button');
const crntDspl = document.querySelector('.current');
const prvsDspl = document.querySelector('.previous');
const oper = document.querySelectorAll('.op');

const clear = document.getElementById('clear');
const dlt = document.getElementById('del');
const chgsgn = document.getElementById('inv');
const coma = document.getElementById('coma');
const res = document.getElementById('equ');

clear.addEventListener('click', clearDisp);
dlt.addEventListener('click', deleteNum);
chgsgn.addEventListener('click', invert);
coma.addEventListener('click', insertComa);


function fact(a) {
    var total = a
    if (a == 0 || a == 1)
        return 1
    while (a > 1) {
        a--;
        total *= a;
    }
    return total;
};

function clearDisp() {
    currentValue = '';
    previousValue = '';
    crntDspl.innerText = '';
    prvsDspl.innerText = '';
};

function deleteNum() {
    crntDspl.innerText = crntDspl.innerText.slice(0, -1);
    currentValue = crntDspl.innerText;
};

function invert() {
    const neg = -Number(crntDspl.innerText);
    crntDspl.innerText = neg;
};

function insertComa() {
    if (crntDspl.innerText === '')
        crntDspl.innerText = '0';
    if (!crntDspl.innerText.includes(','))
        crntDspl.innerText += ',';
    currentValue = crntDspl.innerText;
};

function display(a) {
    if (currentValue.length < 20) {
        currentValue += a;
    }
};

function operate(op) {
    if (!currentValue.includes(op)) {
        currentValue += ' ' + op;
        previousValue = currentValue;
        currentValue = '';
        operator = op;
    }
};

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    aux = previousValue + " " + operator + " " + currentValue

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue
    } else {
        previousValue /= currentValue;
    };

    currentValue = previousValue.toString()
    previousValue = aux.toString();
};

btn.forEach(button =>
    button.addEventListener('click', function (e) {
        display(e.target.innerText)
        crntDspl.innerText = currentValue;
    }));

oper.forEach(button =>
    button.addEventListener('click', function (e) {
        operate(e.target.dataset.value);
        previousValue = previousValue.slice(0, -2);
        prvsDspl.innerText = previousValue + " " + operator;
        crntDspl.innerText = currentValue;
    })
);

res.addEventListener('click', function () {
    calculate();
    prvsDspl.innerText = previousValue
    crntDspl.innerHTML = currentValue;
});
