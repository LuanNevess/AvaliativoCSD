function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta11', "11) Resposta correta!");
} else {
    localStorage.setItem('resposta11', "11) Resposta incorreta!");
}

    location.href = '../Questão 12/index.html';
}
