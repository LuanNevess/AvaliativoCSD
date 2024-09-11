function salvarResposta(valor) {
if (valor == true) {
    localStorage.setItem('resposta5', "5) Resposta correta!");
} else {
    localStorage.setItem('resposta5', "5) Resposta incorreta!");
}

    location.href = '../Questão 6/index.html';
}
