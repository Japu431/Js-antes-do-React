// Nullish Coalescing Operator

const idade = 12;

document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");


// --------------------------

// Object

const user = {
  name: "Matheus",
  idade: 17,
  adress: {
    street: "Rua blabla",
    number: 1231,
  }
};

// in - ele verifica se tem a propriedade name no objeto user e retorna um boolean
console.log("name" in user);

// Retorna os campos do objeto
document.body.innerText = Object.keys(user);

// Retorna valores do objeto
document.body.innerText = Object.values(user);
document.body.innerText = JSON.stringify(Object.values(user));

// Retorna valores do objeto em forma de array's
document.body.innerText = JSON.stringify(Object.entries(user));

// Desestruração

// => const adress = user.adress || const idade = user.idade 
const { idade, adress } = user;

document.body.innerText = JSON.stringify({ idade, adress });

// Se eu quiser renomear a variavel idade , basta colocar o : <nomeDaNovaVariavel>
const { idade: age, adress } = user;

document.body.innerText = JSON.stringify({ age, adress });

const { idade: age, adress, nickname = "Japu431" } = user;

document.body.innerText = JSON.stringify({ nickname, age, adress });

function mostraIdade({ idade, nickname = "Japu431" }) {

  return idade;

}

document.body.innerText = mostraIdade(user);


// Rest Operator

const { name, idade, ...rest } = user;

document.body.innerText = JSON.stringify(rest)


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, ...rest] = array;

document.body.innerText = JSON.stringify({ first, second, rest });

const [first, , third, ...rest] = array;


// Operational Chaining


const user = {
  name: "Matheus",
  idade: 17,
  adress: {
    street: "Rua blabla",
    number: 1231,
    zip: {
      code: '123213242',
      city: "Rio do Sul"
    },
  }
};


document.body.innerText = user.adress?.zip?.code ?? "Não informado";

const array = [1, 2, 3, 4, 5];

const novoArray = array.map(item => {
  if (item % 2 == 0) {
    return item * 10;
  }

  return item;
})

const novoArray = array
.filter(item => item % 2 != 0)
.map(item => item * 10);

// Boolean
const todosItensSaoNumeros = array.every(item => typeof item == "number")

const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item !== "number";
})

const par = array.find(item => item % 2 == 0);
const parIndice = array.findIndex(item => item % 2 == 0);

const soma = array.reduce((acc, item) => {
  document.body.innerText += acc + ',' + item + "----";

  return acc + item;
}, 0) 


document.body.innerText = JSON.stringify(soma);


const somaDoisNumeros = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000)
})

somaDoisNumeros(1, 2).then(soma => document.body.innerText = soma).catch(e => {
  console.log(e);
}) 

fetch('https://api.github.com/users/japu431')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  })
  .catch(er => {
    console.log(er);
  })
  .finally(() => {
    console.log("Executado!");
  })


async function buscaDadosNoGithub() {

  try {
    const response = await fetch('https://api.github.com/users/japu431');

    const body = await response.json();

    console.log(body);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Executado!");
  }

}

buscaDadosNoGithub();


// name exported 

import { soma, subtracao, multiplicacao, divisao } from './lib/math';
import * as math from './lib/math';

console.log(math.soma(1, 2));
console.log(math.subtracao(1, 2));
console.log(math.multiplicacao(1, 2));
console.log(math.divisao(1, 2));
