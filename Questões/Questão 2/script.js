function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta2', "2) Resposta correta!");
} else {
    localStorage.setItem('resposta2', "2) Resposta incorreta!");
}

    location.href = '../Questão 3/index.html';
}
