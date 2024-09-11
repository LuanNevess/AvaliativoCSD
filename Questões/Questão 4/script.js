function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta4', "4) Resposta correta!");
} else {
    localStorage.setItem('resposta4', "4) Resposta incorreta!");
}

    location.href = '../Questão 5/index.html';
}
