document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('usuario');
    const submitButton = document.getElementById('botao');

    inputField.addEventListener('input', function(){
    if (inputField.value.trim().length >= 3) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
    });

    document.getElementById('Identificação').addEventListener('submit', (event) => {
        const valorUsuario = inputField.value;
        
        localStorage.setItem('usuario', valorUsuario);
    });
    });