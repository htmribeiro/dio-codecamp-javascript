let id = parseInt(gets());
let distancia;

if (id === 10) {
  print('Plantar!');
} else if (id >= 10) {
  distancia = id - 10;
  print(`O buraco deve retroceder ${Math.abs(distancia)} metros`);
} else {
  distancia = id - 10;
  print(`O buraco deve avançar ${Math.abs(distancia)} metros`);
}