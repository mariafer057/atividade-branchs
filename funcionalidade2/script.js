function calcularMedia() {
    // Obtém os valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value || 0);
    const nota2 = parseFloat(document.getElementById('nota2').value || 0);
    const nota3 = parseFloat(document.getElementById('nota3').value || 0);
  
    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;
  
    // Verifica se o aluno está aprovado
    const aprovado = media >= 6;
  
    // Mostra o resultado na tela
    const resultado = aprovado ? 'Aprovado' : 'Reprovado';
    document.getElementById('resultado-media').innerText = `Média: ${media.toFixed(2)} - ${resultado}`;
  }
  