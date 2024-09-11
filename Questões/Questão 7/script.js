function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta7', "7) Resposta correta!");
} else {
    localStorage.setItem('resposta7', "7) Resposta incorreta!");
}

    location.href = '../Questão 8/index.html';
}
