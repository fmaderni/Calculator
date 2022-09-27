const btn = document.querySelectorAll('.button');
const dspl = document.querySelector('.display');
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
    dspl.innerHTML = '';
}

function deleteNumb() {
    dspl.innerHTML = dspl.innerHTML.slice(0, -1)
}

function invert() {
    const neg = -Number(dspl.innerHTML);
    dspl.innerHTML = neg;
}

function insertComa() {
    if (dspl.innerHTML === '')
        dspl.innerHTML = '0';
    if (!dspl.innerHTML.includes(','))
        return dspl.innerHTML += ',';
}

function display(e) {
    const value = e.target.dataset.value;
    dspl.innerHTML += value;
}

function calculate() {

}

btn.forEach(button =>
    button.addEventListener('click', display)
);

oper.forEach(button =>
    button.addEventListener('click', display)
);

