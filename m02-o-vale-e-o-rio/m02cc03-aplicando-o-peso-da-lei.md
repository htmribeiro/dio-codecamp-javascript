# Desafio: Examinando Árvores

[Intermediate]

## 🌱 Sobre o Desafio

A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através
da justiça, multas para a *Oil Corp* caso eles não comecem a tratar todas as
formas que estão poluindo a região. Além de realizar protocolos de
reflorestamento e cuidados com a fauna e a flora do vale, respeitando a
natureza.

As atividades que demandam tratamento e atenção são:

* Reflorestamento
* Esgoto Tratado
* Emissão de Carbono
* Energia Sustentável

Para cada uma delas existem três critério:

1. Não feito
1. Em progresso
1. Feito

* O que não foi feito deve receber **multa**
* O que está em progresso **avaliação de progresso**
* O que está feito **não multar**

### Objetivo

Crie um código que:

* [ ] analise cada uma dessas atividades e
* [ ] print no console o que deverá ser feito.

Nosso amigo e *CleanCoder* Felipão nos ajudou com um pedaço do código.</br>
Ele criou a *Arrow Function* `findItem`.</br>
O que ela faz é criar um filtro para encontrar as chaves no nosso objeto.</br>
Podemos notar que os parâmetros dela não estão exatamente ao lado como uma
função normal: `function exemplo(parametros)`, mas funciona exatamente do
mesmo jeito.

A utilização dela é feita da mesma forma: `findItem(objeto, index)`.</br>
Porém isso irá nos retornar a chave.</br>
Para termos o valor da chave precisamos fazer dessa forma:

* `list[findItem(objeto, index)]`

## 🌅 Entradas e Saídas

As entradas serão: Uma lista de objetos a serem verificados e os valores das chaves de um objeto. A saída deverá ser **"Multa"**, **"Avaliação de progresso"** ou **"Não multar"** dependendo do valor de cada uma das chaves a serem verificadas.

## 🌳 Exemplo

|  Entrada   |   Saída    |
| :--------: | :--------: |
| Reflorestamento,</br>EsgotoTratado | Não multar</br>Avaliação de progresso |
| Feito</br>Em progresso</br>Não feito</br>Não feito |  |
| Reflorestamento,</br>EsgotoTratado,</br>EmissaoDeCarbono | Multa</br>Não multar</br>Avaliação de progresso |
| Não feito</br>Feito</br>Em progresso</br>Feito ||

### Code submitted

```js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let arr = gets().split(', ')

const list = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

//TODO: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor
//de cada uma das chaves a serem verificadas da lista arr
```

### TESTS

#### Test #1

**Input data:**
**Expected output:**
**Your Output:**

### INFO

#### Others Examples

```js
```

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
