import React, { useState } from 'react';

function CalculoIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    console.log(alturaNum, pesoNum);

    // Verifica se os valores são válidos
    if (!alturaNum || !pesoNum) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    // Cálculo do IMC
    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obeso';
    }

    // Exibe o resultado formatado corretamente
    setResultado(`Resultado: ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '10 auto' }}>
      <h2>Cálculo de IMC</h2>

      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px', width: '100px', textAlign: 'left' }}>Altura (m):</span>
        <input 
          type="number" 
          id="altura" 
          step="0.01" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
          placeholder="Ex: 1.70" 
          style={{ width: '100%' }} 
        />
      </div>

      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px', width: '100px', textAlign: 'left' }}>Peso (kg):</span>
        <input 
          type="number" 
          id="peso" 
          step="0.1" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          placeholder="Ex: 70" 
          style={{ width: '100%' }} 
        />
      </div>

      <button onClick={calcularIMC} style={{ display: 'block', width: '100%' }}>Calcular IMC</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default CalculoIMC;


