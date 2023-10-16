// 1.1 ARROW FUNCTIONS ----------------------------------------------------------

// Exercici 1: ----------------------------------------------------------

add = () => {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let suma = a+b;

    console.log(suma);
    document.getElementById("suma").innerHTML="El total és " + suma;
}  


// Exercici 2: ----------------------------------------------------------
randomNumber = () => {
    let random = Math.floor(Math.random()*100);
    
    console.log(random);
    document.getElementById("numero").innerHTML="El número és " + random;
}

// Exercici 3: ----------------------------------------------------------

 
function greet(){
    this.name = document.getElementById("name1").value;
    greet = () => {
        console.log("Hola, com estàs " + this.name);
        document.getElementById("saludo").innerHTML= "Hola como estàs " + this.name;
    }
}

// Exercici 4: ----------------------------------------------------------

printNumbers = (num) => {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
};

const num = [9,4,6,33,2,8,9,45,11,22,90,56,43,67];
printNumbers(num);



// 1.2 OPERADOR TERNARI ----------------------------------------------------------

//ex1 ----------------------------------------------------------

conduir =() => {
    let age = Number(document.getElementById("edat").value);
    document.getElementById("resposta").innerHTML = age >= 18? "Pots conduir" : "No pots conduir";
    console.log(age >= 18? "Pots conduir" : "No pots conduir");
}

//ex2 ----------------------------------------------------------

comparar = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("compara").innerHTML = n1 > n2?  "El " + n1 + " és més gran" : "El " + n2 + " és més gran";
    console.log(n1 > n2? "El " + n1 + " és més gran" : "El " + n2 + " és més gran");
}

//NIVELL 2 ----------------------------------------------------------
//Ex3 ----------------------------------------------------------

function enlazar() {
    let numb1 = Number(document.getElementById("tipus").value);

    document.getElementById("tipusR").innerHTML = numb1 == 0 ? "El " + numb1 + " és igual a zero" : ( numb1 < 0 ? " El número " + numb1 + " és negatiu." : "El número " + numb1 + " és positiu");
    console.log(numb1 == 0 ? "El " + numb1 + " és igual a zero" : ( numb1 < 0 ? " El número " + numb1 + " és negatiu." : "El número " + numb1 + " és positiu"));
}

function trobarMaxim(){
    let na = Number(document.getElementById("numA").value);
    let nb = Number(document.getElementById("numB").value);
    let nc = Number(document.getElementById("numC").value);

    let max = na > nb? (na > nc ? na : nc) : (nb > nc ? nb : nc);

    document.getElementById("maxim").innerHTML = "El número més alt és " + max;
    console.log("El número més alt és " + max);

}

//NIVELL 3 ----------------------------------------------------------
//Ex4 ----------------------------------------------------------

function parOImpar(){
    const numbers = [];
    const cantidad = 6;
    let arrayHTML = "";

    for (let i = 0; i < cantidad; i ++){
        const input = prompt ("Vamos a comprobar los pares e impares que hay dentro de una serie de 6 números. Introduce un número:");
        const numb = parseInt(input);

        if (!isNaN(numb)){
            numbers.push(numb)
        }else{
            alert("No es un número válido, inténtalo de nuevo.");
            i--;
        }
    }

    for (let i = 0; i < numbers.length; i ++){
        let check = numbers [i];
        let esPar = check % 2 === 0;
        let mensaje = esPar ? "par" : "impar";
        arrayHTML += `${check} es ${mensaje}<br>`;
        console.log(check + " es " + mensaje);
    }

    document.getElementById("array").innerHTML = arrayHTML;

}

// 1.3 CALLBACKS ----------------------------------------------------------

//Nivell 1 ----------------------------------------------------------

//Ex1 ----------------------------------------------------------

function processar (numero, callback) {
    return callback(numero);
}

function miCallback(numero){

    console.log(`El número és: ${numero}`)
    document.getElementById("processo").innerHTML = "El número és: " + numero;
}

let numero = Math.floor(Math.random()*100);
processar(numero, miCallback);


//Ex2 -------------------------------------------------------

function sumar(){
    let x = Number(document.getElementById("nA").value);
    let y = Number(document.getElementById("nB").value);

    function suma(a, b) {
        return a + b;

}

const resultat = calculadora(x, y, suma);
console.log("El resultat de la suma és: " + resultat);
document.getElementById("calcul").innerHTML = "El resultat de la suma és " + resultat;

}

function calculadora (n1, n2, opCallback){
    return opCallback(n1,n2)
    
}


//Ex 3 ----------------------------------------------------------

function saludar(){
    const persona = document.getElementById("nom").value;

    esperarISaludar(persona, function(persona) {
        document.getElementById("saludar").innerHTML = "Hola " + persona;
        console.log("Hola " + persona);
    });

}

function esperarISaludar (nombre, callback){
    setTimeout (function() {
        callback(nombre);
    }, 2000);
}

//Ex 4 -----------------------------------------------------

function processarElements(arr, callback){
    let result = "";
    for (let i = 0; i < arr.length; i ++){
        result += callback(arr[i]);
    }

    return result;
}

function mCallback(elemento) {
    return `
                <li>Processsant element:  ${elemento}</li>
            `;
}

function procesar(){
    const arrTotal = [1, 2, 3, 4, 5];
    let result = processarElements(arrTotal, mCallback);
    console.log(result);
    document.getElementById("elements").innerHTML = result;
}

// Nivell 3 -----------------------------------------------
//Ex 5 -----------------------------------------------------

function processarCadena(cadena, callback){
    const cadenaMajus = cadena.toUpperCase();
    callback(cadenaMajus);
}

function mostrarMajus(cadena){
    document.getElementById("majuscula").innerHTML = cadena;
    console.log(cadena);
}

function convertir(){
    let parole = document.getElementById("paraula").value;
    processarCadena(parole, mostrarMajus);
}


// 1.4 REST & SPREAD OPERATORS
// Nivell 1 -----------------------------------------------
//Ex 1 -----------------------------------------------------

const a1 = [22, 33, 44, 55];
const a2 = [66, 77, 88, 99];
const a3 = [...a1, ...a2];
console.log(a3);
document.getElementById("arr").innerHTML = a3;


//Ex 2 --------------------------------------------------------

function sumar(...numeros) {
    let total = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(sumar(11, 22, 33, 44, 55, 66)); 
document.getElementById("totale").innerHTML = sumar(11,22,33,44,55,66);


// Nivell 2 --------------------------------------------------------
// Ex3 --------------------------------------------------------

const objeto1 = {
    nom: "bicicleta",
    valor: 250
};

const objeto2 = {...objeto1};

objeto2.nom = "parapente";
console.log("Objeto 1: ", objeto1);
console.log("Objeto 2: ", objeto2);

//Ex 4 --------------------------------------------------------

const [primerElement, segonElement, ...resta] = [12, 23, 34, 45, 56];
console.log(primerElement, segonElement); 
console.log(resta); 

//Nivell 3 --------------------------------------------------------
//Ex5 --------------------------------------------------------

function multiplicar(a, b, c){
    return a*b*c
}

const multi = [45, 54, 454, 678, 345];
const total = multiplicar(...multi);
console.log(total);
document.getElementById("m").innerHTML = total;

//Ex6 --------------------------------------------------------

const o1 = {
    prop1: "manzana",
    prop2: "verdes"
     
}

const o2 = {
    prop3: "coche",
    prop4: "eléctrico"
}

const fusion = {...o1, ...o2};
console.log(fusion);


//1.5 ARRAY TRANSFORMATIONS --------------------------------------------------------
//Nivell 1 --------------------------------------------------------

//ex1 --------------------------------------------------------

const numeros = [1, 2, 3, 4];
const quadrat = numeros.map(numero => numero * numero);
console.log(quadrat);
document.getElementById("q").innerHTML = "El quadrat dels números és " + quadrat;

//ex2 --------------------------------------------------------
const numbers = [1, 2, 3, 4];
const parells = numbers.filter(numbers => numbers % 2 === 0); 
console.log(parells);
document.getElementById("p").innerHTML = "Els parells son: " + parells;

//ex3 --------------------------------------------------------

const nombres = [1, 10, 8, 11];
const majorDe = nombres.find(nombres => nombres > 10);
console.log(majorDe);
document.getElementById("f").innerHTML = "El major de 10 és " + majorDe;

//ex4 --------------------------------------------------------

const nums = [13, 7, 8, 21];
const suma = nums.reduce((acumulador, nums) => acumulador + nums);
console.log(suma);
document.getElementById("r").innerHTML = "El total és " + suma;

//nivell2 --------------------------------------------------------
//ex5 --------------------------------------------------------

const numerus = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const llista = numerus
    .filter(numerus => numerus >= 10)
    .map(numerus => numerus * 2)
    .reduce((acumulador, numerus) => acumulador + numerus, 0);

console.log(llista);
document.getElementById("mix").innerHTML = "El total és " + llista;

//nivell 3 --------------------------------------------------------
//ex 6 --------------------------------------------------------

const dorsals = [11, 12, 13, 14];
const majorsTots = dorsals.every(dorsal => dorsal > 10);
console.log(majorsTots);
document.getElementById("every").innerHTML = "Son majors de 10 tots? " + majorsTots;

const algunsMajors = dorsals.some(dorsal => dorsal > 10);
console.log(algunsMajors);
document.getElementById("some").innerHTML = "Son alguns majors de 10 tots? " + algunsMajors;

//1.6 ARRAY LOOPS --------------------------------------------------------
//nivell 1 --------------------------------------------------------

//ex1 --------------------------------------------------------

const noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(noms => console.log(noms));

//ex 2  --------------------------------------------------------

for (const nombre of noms) {
    console.log(nombre);
}

// ex3   --------------------------------------------------------

const nmbs =  [1, 2, 3, 4, 5, 6];
const pares = nmbs.filter(nmbs => nmbs % 2 === 0);
const nouArr = [...pares];
console.log(nouArr);
document.getElementById("nou").innerHTML = "Nou array de números parells " + nouArr;

// nivell 2    --------------------------------------------------------

// ex4    --------------------------------------------------------

let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
};

for (let clau in obj) {
    if (obj.hasOwnProperty(clau)) {
      console.log(clau + ": " + obj[clau]);
    }
}

//ex5    --------------------------------------------------------

let nss = [1, 2, 3, 4, 5, 6];

for (const element of nss) {
    if (element === 5) {
      console.log("He trobat el número 5, deixo de buscar!");
      break;
    }
    console.log(element);
}

// Nivell 3    --------------------------------------------------------

// ex6  --------------------------------------------------------

let index = 0;
for (const elemento of noms) {
    console.log(`Index ${index}: ${noms} `);
    index++;
}

// 1.7 PROMISES & ASYNC/AWAIT  --------------------------------------------------------

// Nivell 1   --------------------------------------------------------

//ex1 i ex 2    --------------------------------------------------------

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola món!!!");
    }, 2000); 
});
  
miPromesa
    .then(salutacio => {console.log(salutacio);})
    .catch(error => {console.error(error);});



// Ex 3   --------------------------------------------------------

const myPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    const exito = false;
        if(exito){
            resolve("Hola món!!!");
        }else{
            reject ("No trobem a qui saludar, hi ha un error!")
        }
    }, 2000); 
});

myPromesa
    .then(salutacio => {console.log(salutacio);})
    .catch(error => {console.error(error);});

// Ex4 --------------------------------------------------------

async function myAsync() {
    const salutacio = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hola món!!!");
        }, 2000); 
    });

    console.log(salutacio); 
}
  
myAsync();


// Nivell 2

// Exercici 5

async function myAsync() {
    try {
      const salutacio = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hola món!!!");
        }, 2000); 
      });

      console.log(salutacio); 
    } catch (error) {
      console.error(error);
    }
  }
  
myAsync();


//Nivell 3

// Ex 6

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Primera promesa resolta en 2 segons")
    },2000);
});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Segona promesa resolta en 3 segons")
    },3000);
});

Promise.all([promise1, promise2])
    .then(resultat => {
        console.log("Totes les promeses s'han complert");
        console.log(resultat[0]);
        console.log(resultat[1]);
    })
    .catch(error => {
        console.error("Alguna promesa no s'ha complert");
        console.error(error);
    });