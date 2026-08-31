class Calculadora {
    somar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero");
        }

        return a / b;
    }

    potencia(a, b) {
        return a ** b;
    }

    resto(a, b) {
        return a % b;
    }

    dobro(numero) {
        return numero * 2;
    }

    triplo(numero) {
        return numero * 3;
    }

    quadrado(numero) {
        return numero ** 2;
    }

    cubo(numero) {
        return numero ** 3;
    }

    absoluto(numero) {
        return Math.abs(numero);
    }

    maior(a, b) {
        return Math.max(a, b);
    }

    menor(a, b) {
        return Math.min(a, b);
    }

    media(a, b) {
        return (a + b) / 2;
    }

    ehPar(numero) {
        return numero % 2 === 0;
    }

    ehImpar(numero) {
        return numero % 2 !== 0;
    }

    ehPositivo(numero) {
        return numero > 0;
    }

    ehNegativo(numero) {
        return numero < 0;
    }

    ehZero(numero) {
        return numero === 0;
    }

    fatorial(numero) {
        if (numero < 0) {
            throw new Error("O número não pode ser negativo");
        }

        let resultado = 1;

        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }

        return resultado;
    }
}