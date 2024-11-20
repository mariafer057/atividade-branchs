function converterTemperatura() {
    const celsius = parseFloat(document.getElementById('celsius').value || 0);
    const fahrenheit = (celsius * 9/5) + 32;
  
    document.getElementById('resultado-temperatura').innerText = 
      `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  }
  