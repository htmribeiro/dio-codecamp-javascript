//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let plastico = parseInt(prompt());
let diasNecessarios = 0;

//TODO: Print no console a quantidade de dias que levará para que o plástico chegue
//TODO: a 1kg ou menos

while (plastico > 1) {
    plastico / 2;
    diasNecessarios++;
}

alert(`Serão necessários ${diasNecessarios} dias`)