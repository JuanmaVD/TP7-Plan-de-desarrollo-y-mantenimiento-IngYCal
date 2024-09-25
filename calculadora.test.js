const Calculadora = require('./calculadora.js');

describe('Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test('sumar 2 + 3 debe ser 5', () => {
    expect(calc.sumar(2, 3)).toBe(5);
  });

  test('restar 5 - 3 debe ser 2', () => {
    expect(calc.restar(5, 3)).toBe(2);
  });

  test('multiplicar 4 * 3 debe ser 12', () => {
    expect(calc.multiplicar(4, 3)).toBe(12);
  });

  test('dividir 10 / 2 debe ser 5', () => {
    expect(calc.dividir(10, 2)).toBe(5);
  });

  test('dividir por cero debe lanzar un error', () => {
    expect(() => calc.dividir(10, 0)).toThrow('No se puede dividir por cero');
  });
});
