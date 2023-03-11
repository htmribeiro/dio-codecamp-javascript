# Desafio: Examinando Árvores

[Basic]

## 🌱 Sobre o Desafio

Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar se, as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido por uma das _CleanTechs_ parceiras, a _Cleanduino_ (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.

### Objetivo

Crie um código que, para cada item dessa lista:

- [ ] verifique se a amostra está com um nível: **Bom**, **Aceitável** ou **Inaceitável**.
- [ ] Para cada nível, imprima a ação que deve ser realizada considerando as seguintes regras:
  - Bom (mais de 75% de saúde na amostra)
    - Imprima `"Descartar da lista"`
  - Aceitável (mais de 50% e menos de 75%)
    - Imprima `"Manter sob observação"`
  - Inaceitável (menos de 50%)
    - Imprima `"Isolar e iniciar protocolo de cuidados"`

> Lembrando que todas as amostras são de **exatamente** 100g e as listas terão **tamanhos variados**.

## 🌅 Entradas e Saídas

As entradas será uma lista com as porcentagens de saúde das árvores. Para a saída esperamos que seja printado no console, dependendo da porcentagem, se a árvore deve: "Ser descartada da lista", "Manter sob observação" ou "Isolar e iniciar protocolos de cuidados". Essas frases devem ser printadas para cada item da lista.

## 🌳 Exemplo

|  Entrada   |                                                           Saída                                                            |
| :--------: | :------------------------------------------------------------------------------------------------------------------------: |
| 10, 75, 98 |                    Isolar e iniciar protocolo de cuidados</br>Descartar da lista</br>Descartar da lista                    |
| 50, 65, 80 |                           Manter sob observação</br>Manter sob observação</br>Descartar da lista                           |
| 2, 10, 15  | Isolar e iniciar protocolo de cuidados</b>Isolar e iniciar protocolo de cuidados</b>Isolar e iniciar protocolo de cuidados |

### Code submitted

```js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(",");

//DOING: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
amostra.forEach(function (amostra) {
  if (amostra >= 75) {
    print("Descartar da lista");
  } else if (amostra >= 50 && amostra < 75) {
    print("Manter sob observação");
  } else {
    print("Isolar e iniciar protocolo de cuidados");
  }
});
```

### TESTS

#### Test #2

**Input data:**
74, 75, 50, 49
**Expected output:**
Manter sob observação
Descartar da lista
Manter sob observação
Isolar e iniciar protocolo de cuidados
**Your Output:**
Manter sob observação
Descartar da lista
Manter sob observação
Isolar e iniciar protocolo de cuidados

#### Test #4

**Input data:**
15, 20, 25, 30, 35
**Expected output:**
Isolar e iniciar protocolo de cuidados
Isolar e iniciar protocolo de cuidados
Isolar e iniciar protocolo de cuidados
Isolar e iniciar protocolo de cuidados
Isolar e iniciar protocolo de cuidados
**Your Output:**
Isolar e iniciar protocolo de cuidados
Isolar e iniciar protocol

#### Test #5

**Input data:**
2, 50, 75, 90
**Expected output:**
Isolar e iniciar protocolo de cuidados
Manter sob observação
Descartar da lista
Descartar da lista
**Your Output:**
Isolar e iniciar protocolo de cuidados
Manter sob observação
D

### INFO

#### Others Examples

```js
// Usando um For ao invés do forEach e um switch. [o que não era necessário]

for (let i = 0; i < amostra.length; i++) {
    let nivel = "";

    if (amostra[i] >= 75) {
        nivel = "Bom";
    } else if (amostra[i] >= 50) {
        nivel = "Aceitável";
    } else {
        nivel = "Inaceitável";
    }

    // Imprime a ação que deve ser realizada para cada nível de saúde
    switch (nivel) {
        case "Bom":
        print("Descartar da lista");
        break;
        case "Aceitável":
        print("Manter sob observação");
        break;
        case "Inaceitável":
        print("Isolar e iniciar protocolo de cuidados");
        break;
        default:
        print("Nível de saúde não identificado");
        break;
    }
}
```

#### JavaScript

In JavaScript the functions of STDIN and STDOUT respectively are **gets** and **console.log**, the function gets is implemented internally to assist in data entry.

#### Example

```js
let line = gets(); // Read the input line
console.log(line); // Print the data
```
