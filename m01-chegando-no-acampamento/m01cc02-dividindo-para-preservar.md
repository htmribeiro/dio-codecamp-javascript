# Desafio: Dividindo Para Preservar

[Basic]

## 🌱 Sobre o Desafio

Agora precisamos separar os CleanCoders em dois grupos, isso vai facilitar a execução de ações estratégicas.

Para isso, foi definido que os IDs

* pares devem ir para as barracas à direita da estrada que corta o acampamento e os
* ímpares para a esquerda.

### Objetivo

Aproveite essa oportunidade para

* [X] criar um código que verifique o ID do CleanCoder e
* [X] indique para onde ele deve ir: Direita ou Esquerda.

Um jeito bem fácil de fazermos essa verificação é utilizando o operador `%`. Com ele conseguimos verificar o resto de divisões.

## ⛺ Entradas e Saídas

As entradas serão números inteiros positivos que representarão os **IDs** dos CleanCoders. A saída deve ser se, de acordo com o ID, o CleanCoder deve ir para as barracas da direita ou da esquerda.

## 🌳 Exemplo

| Entrada | Saída |
|:-:|:-:|
| 250 | Barraca da Direita  |
| 15  | Barraca da Esquerda |
| 2   | Barraca da Direita  |

### Code

```js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//DONE: Print no console para qual Barraca o CleanCoder deve ir
let direction = id % 2;
let goToRight = 'Barraca da Direita'
let goToLeft = 'Barraca da Esquerda'

if (direction === 0) {
    print(goToRight);
} else {
    print(goToLeft);
}
```

### TESTS

#### Test #3

**Input data:**
60
**Expected output:**
Barraca da Direita
**Your Output:**
Barraca da Direita

#### Test #4

**Input data:**
45
**Expected output:**
Barraca da Esquerda
**Your Output:**
Barraca da Esquerda

#### Test #5

**Input data:**
100
**Expected output:**
Barraca da Direita
**Your Output:**
Barraca da Direita

### INFO

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
