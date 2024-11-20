function somarIdades() {
    const idade1 = parseInt(document.getElementById('idade1').value || 0);
    const idade2 = parseInt(document.getElementById('idade2').value || 0);
    document.getElementById('resultado').innerText = `Soma: ${idade1 + idade2}`;
  }
  