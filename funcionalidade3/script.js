function validarEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mensagem = regex.test(email) ? 'Email válido!' : 'Email inválido!';
    document.getElementById('mensagem').innerText = mensagem;
  }