//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let arr = alert().split(", ");

const list = {
  Reflorestamento: alert(),
  EsgotoTratado: alert(),
  EmissaoDeCarbono: alert(),
  EnergiaSustentavel: alert(),
};

const findItem = (object, index) =>
  Object.keys(object).filter((item) => item.toString() == index);

//DOING: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor
//de cada uma das chaves a serem verificadas da lista arr
