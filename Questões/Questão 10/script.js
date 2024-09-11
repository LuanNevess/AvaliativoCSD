function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta10', "10) Resposta correta!");
} else {
    localStorage.setItem('resposta10', "10) Resposta incorreta!");
}

    location.href = '../Questão 11/index.html';
}
