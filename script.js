const botones = document.querySelectorAll('buttom')
const numeros = document.querySelectorAll('.number')
const symbol = document.querySelectorAll('.symbol')
const resultadoA = document.getElementById('a')
const resultadoB = document.getElementById('b')
const clear = document.getElementById('clear')
const sumaBtn = document.getElementById('add')
const restaBtn = document.getElementById('minus')
const multBtn = document.getElementById('mult')
const divisionBtn = document.getElementById('division')
const equal = document.getElementById('equal')

console.log(numeros)
// init number data
let a = [];
let b = [];

// init number InnerText
let aShow;
let bShow;

// init operations switch
let suma = false;
let resta = false;
let multi = false;
let division = false;

// show div Number A
let divA = true;

// Event listener clear
clear.addEventListener('click', () => {
    // show div Number A
    divA = true;
    resultadoA.style.visibility = `visible`;
    resultadoB.style.visibility = `hidden`;

    //clear number data
    resultadoB.innerText = '';
    a = [];
    b = [];
    updateNumber(a);

    //switch operation init
    suma = false;
    resta = false;
    multi = false;
    division = false;
})

// function add number Inner Text
function updateNumber(i){
    if(divA){
    resultadoA.innerText = i
    } else {
    resultadoB.innerText = i
    }
}



// Event listener number
numeros.forEach(number => {
    number.addEventListener('click', (e) => {
        // switch the number between divA & divB
        if(divA){
            a.push(e.target.innerText);
            if (a.length > 15){
                a.shift()
            }
            aShow = +a.join('');
            
            updateNumber(aShow)
        } else {
            b.push(e.target.innerText);
            if (b.length > 15){
                b.shift()
            }
            bShow = +b.join('');
            
            updateNumber(bShow)
        }
    })
})

// Event listener symbol
symbol.forEach(simbolo => {
    simbolo.addEventListener('click', () => {
        // show div Number B
        divA = false;
        resultadoA.style.visibility = `hidden`;
        resultadoB.style.visibility = `visible`;
    })
})

// Event Listener Switch Operation
sumaBtn.addEventListener('click', () => {
    suma = true
})

restaBtn.addEventListener('click', () => {
    resta = true
})

multBtn.addEventListener('click', () => {
    multi = true
})
divisionBtn.addEventListener('click', () => {
    division = true
})


// class object operations
class Operations{
    constructor(x, y){
        this.suma = x + y;
        this.resta = x - y;
        this.multi = x * y;
        this.division = x / y;
    }
}


// equal BTN
equal.addEventListener('click', operationEqual)

function operationEqual(){
    // Object oper
    const oper = new Operations(aShow,bShow)
    if(suma){
        resultFinal = oper.suma
    } else if(resta) {
        resultFinal = oper.resta
    } else if(multi) {
        resultFinal = oper.multi
    } else if(division) {
        resultFinal = oper.division
    } else {
        resultadoA.innerText = '';
        a = [];
        return
    }
    //clean operation data
    resultadoA.innerText = '';
    resultadoB.innerText = '';
    a = [];
    b = [];

    // divA visible
    divA = true;
    resultadoA.innerText = resultFinal
    resultadoA.style.visibility = `visible`;
    resultadoB.style.visibility = `hidden`;
    aShow = resultFinal

    //switch operation init
    suma = false;
    resta = false;
    multi = false;
    division = false;
}


// Dark Theme
const light = "styles/light.css";
const dark = "styles/dark.css";
const btnMode = document.getElementById("btn-mode");
const cssTheme = document.getElementById("theme");

btnMode.addEventListener('click', () => {


    if (cssTheme.getAttribute("href") === light) {
        cssTheme.attributes.href.value = dark;
        btnMode.innerHTML = "Light Mode 🌞";
      } else {
        cssTheme.attributes.href.value = light;
        btnMode.innerHTML = "Dark Mode 🌙";
      }
})