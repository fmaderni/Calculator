let btn = document.querySelectorAll('.button');
let dspl = document.querySelector('.display');
let val1;
let val2;
let operator = ['+','-','x','÷','!']

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
}

function readOp(a, b, op) {
    op == '+' ? addNum(a, b) :
        op == '-' ? substract(a, b) :
            op == 'x' ? product(a, b) :
                divide(a, b);
}


btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        dspl.innerHTML += value;
        let innit = dspl.innerHTML
        if(value == 'AC'){
            dspl.innerHTML = '';
        }
        if(value == 'C'){
            let val1 = innit.slice(0,innit.length - 2);
            dspl.innerHTML = val1;
        }
    });
});

