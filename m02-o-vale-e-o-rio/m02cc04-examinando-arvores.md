# Desafio: Examinando Árvores

[Basic]

## 🌱 Sobre o Desafio

Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar se, as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido por uma das *CleanTechs* parceiras, a *Cleanduino* (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.

### Objetivo

Crie um código que, para cada item dessa lista:

* [ ] verifique se a amostra está com um nível: **Bom**, **Aceitável** ou **Inaceitável**.
* [ ] Para cada nível, imprima a ação que deve ser realizada considerando as seguintes regras:
  * Bom (mais de 75% de saúde na amostra)
    * Imprima `"Descartar da lista"`
  * Aceitável (mais de 50% e menos de 75%)
    * Imprima `"Manter sob observação"`
  * Inaceitável (menos de 50%)
    * Imprima `"Isolar e iniciar protocolo de cuidados"`

> Lembrando que todas as amostras são de **exatamente** 100g e as listas terão **tamanhos variados**.

## ⛺ Entradas e Saídas

As entradas será uma lista com as porcentagens de saúde das árvores. Para a saída esperamos que seja printado no console, dependendo da porcentagem, se a árvore deve: "Ser descartada da lista", "Manter sob observação" ou "Isolar e iniciar protocolos de cuidados". Essas frases devem ser printadas para cada item da lista.

## 🌳 Exemplo

| Entrada | Saída |
|   :-:   |  :-:  |
| 10, 75, 98 | Isolar e iniciar protocolo de cuidados</br>Descartar da lista</br>Descartar da lista |
| 50, 65, 80 | Manter sob observação</br>Manter sob observação</br>Descartar da lista |
| 2, 10, 15  | Isolar e iniciar protocolo de cuidados</b>Isolar e iniciar protocolo de cuidados</b>Isolar e iniciar protocolo de cuidados |

### Code

```js
```

### TESTS

#### Test #1

**Input data:**
**Expected output:**
**Your Output:**

### INFO

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
