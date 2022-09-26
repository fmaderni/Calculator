let btn = document.querySelectorAll('.button');
let dspl = document.querySelector('.display');
let oper = document.querySelectorAll('.op');




btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        dspl.innerText = e.target.innerText;
    })
});