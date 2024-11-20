function verificarParidade() {
    const numero = parseInt(document.getElementById('numero').value || 0);
    const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
  
    document.getElementById('resultado-paridade').innerText = `O número é: ${resultado}`;
  }