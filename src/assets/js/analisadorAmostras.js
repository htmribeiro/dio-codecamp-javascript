var amostras = prompt("digite").split(',');

console.log(amostras)

amostras.forEach(itemAmostra => parseInt(itemAmostra));

amostras.array.forEach(element => {
  if (element >= 75) {
    console.log("Descartar da lista")
  } else if (element >= 50 && element < 75) {
    console.log("Manter sob observação")
  } else {
    console.log("Isolar e iniciar protocolo de cuidados")
  }
});