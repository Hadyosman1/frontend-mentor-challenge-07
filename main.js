const delBtn = document.getElementById('delBtn');
const reseBtn = document.getElementById('reseBtn');
const calcBtn = document.getElementById('calcBtn');
const display = document.getElementById('display');
const togShape = document.querySelector('.tog-shape');
const inputForDisplay = document.querySelectorAll('.addToInput');

inputForDisplay.forEach((btn)=>{
    btn.addEventListener('click', function () {
        if (this.innerText != 'x') {
            display.value += this.innerText;
        }else {
            display.value += '*';

        }
    });
});

delBtn.addEventListener('click' , ()=>{
    let delChar = display.value.slice(0, -1);
    display.value = delChar;
});

reseBtn.addEventListener('click' , ()=>{
    display.value = '';
});

calcBtn.addEventListener('click' , ()=>{
    try {
        display.value = eval(display.value) == Infinity ? 'Error' : eval(display.value) || 0;
        display.style.outline = 'none';
    } catch  {
        display.style.outline = '2px solid red';
    }
    
});

if (localStorage.getItem('theme')) {
    document.body.classList.add(localStorage.getItem('theme'));
}

togShape.addEventListener('click' , () => {
    if (!document.body.classList.contains('second-theme') && !document.body.classList.contains('third-theme') ) {
        document.body.classList.add('second-theme');
        localStorage.setItem('theme' , 'second-theme');
    }else if (document.body.classList.contains('second-theme')) {
        document.body.classList.replace('second-theme','third-theme');
        localStorage.setItem('theme' , 'third-theme')
    }else if (document.body.classList.contains('third-theme')) {
        document.body.classList.remove('third-theme');
        localStorage.removeItem('theme');
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addListener( e =>{
    e.matches ?
    document.body.classList.add('third-theme') 
    : document.body.classList.remove('third-theme');
});
