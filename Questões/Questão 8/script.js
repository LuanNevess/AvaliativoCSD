function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta8', "8) Resposta correta!");
} else {
    localStorage.setItem('resposta8', "8) Resposta incorreta!");
}

    location.href = '../Questão 9/index.html';
}
