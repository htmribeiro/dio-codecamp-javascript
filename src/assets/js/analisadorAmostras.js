//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = prompt().split(",");

alert(amostra);
//DONE: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
amostra.forEach(function (amostra) {
  alert(amostra);
  if (amostra >= 75) {
    alert("Descartar da lista");
  } else if (amostra >= 50 && amostra < 75) {
    alert("Manter sob observação");
  } else {
    alert("Isolar e iniciar protocolo de cuidados");
  }
});

