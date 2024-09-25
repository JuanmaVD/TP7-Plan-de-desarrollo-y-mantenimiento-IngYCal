const Calculadora = require('./calculadora');

const calc = new Calculadora();

console.log('Suma de 2 + 3:', calc.sumar(2, 3));
console.log('Resta de 5 - 3:', calc.restar(5, 3));
console.log('Multiplicación de 4 * 3:', calc.multiplicar(4, 3));
console.log('División de 10 / 2:', calc.dividir(10, 2));

try {
  console.log('División de 10 / 0:', calc.dividir(10, 0));
} catch (error) {
  console.error(error.message);
}
