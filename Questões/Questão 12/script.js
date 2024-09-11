document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="question"]');
    const submitButton = document.getElementById('submitButton');
    let respostaEscolhida = null;

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            respostaEscolhida = radio.value;
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
    })
    });

    submitButton.addEventListener('click', () => {
        if (respostaEscolhida == "B") {
            localStorage.setItem('resposta12', "12) Alternativa correta!");
            console.log("Questão 1: Alternativa Correta!");
        } else {
            localStorage.setItem('resposta12', "12) Alternativa incorreta!");
            console.log("Questão 1: Alternativa Incorreta!");
        }
    });
    });