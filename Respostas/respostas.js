document.addEventListener('DOMContentLoaded', function () {
    const nomeUsuario = localStorage.getItem('usuario');
    const nomeDisplay = document.getElementById('nomeDisplay');
    nomeDisplay.textContent = `${nomeUsuario}:`;
    
    const resposta1 = localStorage.getItem('resposta1');
    const resposta2 = localStorage.getItem('resposta2');
    const resposta3 = localStorage.getItem('resposta3');
    const resposta4 = localStorage.getItem('resposta4');
    const resposta5 = localStorage.getItem('resposta5');
    const resposta6 = localStorage.getItem('resposta6');
    const resposta7 = localStorage.getItem('resposta7');
    const resposta8 = localStorage.getItem('resposta8');
    const resposta9 = localStorage.getItem('resposta9');
    const resposta10 = localStorage.getItem('resposta10');
    const resposta11 = localStorage.getItem('resposta11');
    const resposta12 = localStorage.getItem('resposta12');

    const respostas = [resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12];
    
    function separarRespostas() {
        const listaCorretas = document.querySelector('#listaCorretas ul');
        const listaIncorretas = document.querySelector('#listaIncorretas ul');

        respostas.forEach(function(resposta) {
            const li = document.createElement('li');
            li.innerText = resposta;

            // Verifica se a resposta é correta ou incorreta
            if (resposta.includes('Resposta correta!') || resposta.includes('Alternativa correta!')) {
                li.classList.add('correta');
                listaCorretas.appendChild(li);
            } else if (resposta.includes('Resposta incorreta!') || resposta.includes('Alternativa incorreta!')) {
                li.classList.add('incorreta');
                listaIncorretas.appendChild(li);
            }
        });
    }

    window.onload = separarRespostas;
});
