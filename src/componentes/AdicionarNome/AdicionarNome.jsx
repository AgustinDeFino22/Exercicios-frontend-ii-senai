import React, { useState } from 'react';

function AdicionarNome() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  const handleAdicionar = () => {
    if (nome.trim()) { // Verifica se o nome não está vazio
        const numeroNome = nomes.length + 1; // Calcula o número do nome
        setNomes((prevNomes) => [...prevNomes, `${nome} ${numeroNome}`]); // Adiciona o nome formatado
        setNome(''); // Limpa o campo de entrada
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <button onClick={handleAdicionar}>Adicionar</button>
      <ul>
        {nomes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdicionarNome;






