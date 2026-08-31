const Calculadora = require('../src/calculadoraProva');

describe('Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('somar', () => {
        expect(calc.somar(2, 3)).toBe(5);
    });

    test('subtrair', () => {
        expect(calc.subtrair(5, 2)).toBe(3);
    });

    test('multiplicar', () => {
        expect(calc.multiplicar(2, 4)).toBe(8);
    });

    test('dividir', () => {
        expect(calc.dividir(10, 2)).toBe(5);
    });

    test('divisão por zero', () => {
        expect(() => calc.dividir(10, 0)).toThrow();
    });

    test('potencia', () => {
        expect(calc.potencia(2, 3)).toBe(8);
    });

    test('resto', () => {
        expect(calc.resto(10, 3)).toBe(1);
    });

    test('dobro', () => {
        expect(calc.dobro(4)).toBe(8);
    });

    test('triplo', () => {
        expect(calc.triplo(4)).toBe(12);
    });

    test('quadrado', () => {
        expect(calc.quadrado(4)).toBe(16);
    });

    test('cubo', () => {
        expect(calc.cubo(3)).toBe(27);
    });

    test('absoluto', () => {
        expect(calc.absoluto(-5)).toBe(5);
    });

    test('maior', () => {
        expect(calc.maior(10, 20)).toBe(20);
    });

    test('menor', () => {
        expect(calc.menor(10, 20)).toBe(10);
    });

    test('media', () => {
        expect(calc.media(4, 6)).toBe(5);
    });

    test('ehPar', () => {
        expect(calc.ehPar(4)).toBe(true);
    });

    test('ehImpar', () => {
        expect(calc.ehImpar(5)).toBe(true);
    });

    test('ehPositivo', () => {
        expect(calc.ehPositivo(10)).toBe(true);
    });

    test('ehNegativo', () => {
        expect(calc.ehNegativo(-10)).toBe(true);
    });

    test('ehZero', () => {
        expect(calc.ehZero(0)).toBe(true);
    });

    test('fatorial', () => {
        expect(calc.fatorial(5)).toBe(120);
    });

    test('fatorial negativo', () => {
        expect(() => calc.fatorial(-1)).toThrow();
    });
});