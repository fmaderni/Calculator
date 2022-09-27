let operator = '';
let currentValue = '';
let previousValue = '';

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
dlt.addEventListener('click', deleteNumb);
chgsgn.addEventListener('click', invert);
coma.addEventListener('click', insertComa);
res.addEventListener('click', calculate);


function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function product(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

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


function readOp(a, b, op) {
    op == '+' ? addNum(a, b) :
        op == '-' ? substract(a, b) :
            op == 'x' ? product(a, b) :
                op == '!' ? fact(a) :
                    divide(a, b);
}

function clearDisp() {
    crntDspl.innerHTML = '';
}

function deleteNumb() {
    crntDspl.innerHTML = crntDspl.innerHTML.slice(0, -1)
}

function invert() {
    const neg = -Number(crntDspl.innerHTML);
    crntDspl.innerHTML = neg;
    console.log(neg);
    console.log(typeof(neg))
}

function insertComa() {
    if (crntDspl.innerHTML === '')
        crntDspl.innerHTML = '0';
    if (!crntDspl.innerHTML.includes(','))
        return crntDspl.innerHTML += ',';
}

function display(e) {
    const value = e.target.dataset.value;
    crntDspl.innerHTML += value;
}

function calculate() {

}

btn.forEach(button =>
    button.addEventListener('click', display)
);

oper.forEach(button =>
    button.addEventListener('click', display)
);

