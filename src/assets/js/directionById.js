let id = parseInt(gets());

let direction = id % 2;
let goToRight = 'Barraca da Direita'
let goToLeft = 'Barraca da Esquerda'

if (direction === 0) {
  console.log(goToRight);
} else {
  console.log(goToLeft);
}