const calcular = document.getElementById('calcular')


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = valorIMC;

        let classificação = ''

        if (valorIMC < 16.9) {
            classificação = ('Muito abaixo do peso')
        } else if (valorIMC < 18.4) {
            classificação = ('Abaixo do peso')
        } else if (valorIMC < 24.9) {
            classificação = ('Peso normal, PARABÉNS !!!')
        } else if (valorIMC < 29.9) {
            classificação = ('Acima do peso')
        } else if (valorIMC < 34.9) {
            classificação = ('Obesidade grau I')
        } else if (valorIMC <= 40) {
            classificação = ('Obeidade grau II')
        } else if (valorIMC > 40) {
            classificação = ('Obesidade grau III')
        }
        resultado.textContent = `seu IMC é ${valorIMC} e sua classificação é ${classificação} `
    } else {
        resultado.textContent = 'Preencha todos os campos !!!!!'
    }




}

calcular.addEventListener('click', imc);