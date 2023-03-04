# Desafio: Conhecendo os CleanCoders

[Basic]

## 🌱 Sobre o Desafio

Buscando planejar as ações para conter a ***Oil Corp***, um acampamento foi criado e muitos ***CleanCoders*** (inclusive novos adeptos da causa) estão chegando. Com isso, para faciliar a comunicação e interação, precisamos imprimir cartões de identificação para todas as pessoas.

### Objetivo

* [X] Crie um código que com três entradas (NOME, SOBRENOME e ID) que 
* [X] imprima essas informações no seguinte padrão: "Nome: `NOME SOBRENOME` ID: `ID`"

Venilton, um ***CleanCoder*** experiente, compartilhou uma dica bem útil. Ele disse que é possível utilizar o conceito de **interpolação de strings** para facilitar a impressão de textos concatenados à variáveis. Para utilizar basta fazer assim:

```js
print(`String e ${variavel}`);
```

## ⛺ Entradas e Saídas

* As entradas serão: o nome, o sobrenome e o ID de cada CleanCoder.

* A saída deverá ser essas três variáveis concatenadas em uma única String.

## 🌳 Exemplo

| Entrada | Saída |
|:-:|:-:|
| Kawan</br>Anthony</br>22   | Nome: Kawan Anthony ID: 22   |
| Renan</br>Oliveira</br>98  | Nome: Renan Oliveira ID: 98  |
| Marjory</br>Santos</br>204 | Nome: Marjory Santos ID: 204 |

### Code

```js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let nome = gets()
let sobrenome = gets();
let id = parseInt(gets());

//Print no console as três variáveis de acordo com a saída esperada
print(`Nome: ${nome} ${sobrenome} ID: ${id}`)
```

### TESTS

#### Test #3

**Input data:**
Marcelo
Velloso
250
**Expected output:**
Nome: Marcelo Velloso ID: 250
**Your Output:**
Nome: Marcelo Velloso ID: 250

#### Test #4

**Input data:**
Fernanda
Bombarda
77
**Expected output:**
Nome: Fernanda Bombarda ID: 77
**Your Output:**
Nome: Fernanda Bombarda ID: 77

#### Test #5

**Input data:**
Caio
Belintani
25
**Expected output:**
Nome: Caio Belintani ID: 25
**Your Output:**
Nome: Caio Belintani ID: 25

### INFO

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
