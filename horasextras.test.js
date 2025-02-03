const horasextras = require('./horasextras');

test('Sendo o salario 10 reais por horas, com 50 horas trabalhadas e carga horária sendo 40, o resultado esperado é 100', () => {
    expect(horasextras(10,50,40)).toBe(100)
})

test('Salario por hora 10, Horas trabalhadas 50, carga horaria 40, resultado esperado 100', () => {
    expect(horasextras(10,50,40)).toBe(100)
})

test('Salario por hora -10, Horas trabalhadas 50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(horasextras(-10,50,40)).toBe("todos os valores devem ser positivos")
})

test('Salario por hora 10, Horas trabalhadas -50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(horasextras(10,-50,40)).toBe("todos os valores devem ser positivos")
})

test('Salario por hora 10, Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(horasextras(10,50,-40)).toBe("todos os valores devem ser positivos")
})

test('salario por hora "A", Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser números"', () => {
    expect(horasextras("A",50,-40)).toBe("todos os valores devem ser números")
})

test('salario por hora 10, Horas trabalhadas "A", carga horaria -40, resultado esperado "todos os valores devem ser números"', () => {
    expect(horasextras(10,"A",-40)).toBe("todos os valores devem ser números")
})

test('salario por hora 10, Horas trabalhadas 50, carga horaria "A", resultado esperado "todos os valores devem ser números"', () => {
    expect(horasextras(10,50,"A")).toBe("todos os valores devem ser números")
})