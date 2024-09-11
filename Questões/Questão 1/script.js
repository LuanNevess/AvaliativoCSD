function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta1', "1) Resposta correta!");
} else {
    localStorage.setItem('resposta1', "1) Resposta incorreta!");
}

    location.href = '../Questão 2/index.html';
}
