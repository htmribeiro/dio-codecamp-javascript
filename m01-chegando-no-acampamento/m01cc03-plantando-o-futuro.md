# Desafio: Plantando o Futuro

[Intermediate]

## 🌱 Sobre o Desafio

Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, árvore fundamental para a magia do vale. Para isso, é necessário plantá-los a uma certa distância um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que algumas não se desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um do outro, assim conseguiremos plantar todas as mudas e evitar que algumas não se desenvolvam.

### Objetivo

Crie um código que, com as entradas de distancias dos buracos avaliadas pelo drone, verifique se

* [X] o espaço entre um buraco e outro é igual a **10 metros**.

* [X] Se for, imprima no console **"Plantar!"**.

* [X] Se não for, imprima no console a distância que o buraco deve **retroceder** ou **avançar** para chegar ao número ideal.

Para esse desafio os métodos `Math` do Javascript podem ser muito úteis.

## ⛺ Entradas e Saídas

As entradas serão quantos metros o drone verificou entre um buraco e outro. A saída deverá ser, dependendo da distância dos buracos analisados pelo drone, se os CleanCoders podem plantar ou se o buraco deve avançar ou retroceder uma quantia X de metros.

## 🌳 Exemplo

| Entrada | Saída |
|   :-:   |  :-:  |
| 10 | Plantar!                          |
| 15 | O buraco deve retroceder 5 metros |
| 2  | O buraco deve avançar 8 metros    |

### Code

```js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());
let distancia;

//DOING: Print no console se a semente deve ser plantada ou se o buraco deve
//avançar ou retroceder X metros
if (id === 10) {
    print('Plantar!');
} else if (id >= 10) {
    distancia = id - 10;
    print(`O buraco deve retroceder ${Math.abs(distancia)} metros`);
} else {
    distancia = id - 10;
    print(`O buraco deve avançar ${Math.abs(distancia)} metros`);
}
```

### TESTS

#### Test #1

**Input data:**
13
**Expected output:**
O buraco deve retroceder 3 metros
**Your Output:**
O buraco deve retroceder 3 metros

#### Test #4

**Input data:**
14
**Expected output:**
O buraco deve retroceder 4 metros
**Your Output:**
O buraco deve retroceder 4 metros

#### Test #6

**Input data:**
6
**Expected output:**
O buraco deve avançar 4 metros
**Your Output:**
O buraco deve avançar 4 metros

### INFO

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
