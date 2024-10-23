import React, { useState } from 'react';

function RemoverNome() {
  const [nomes, setNomes] = useState(['Nome 1: Agustin', 'Nome 2: Emanuel', 'Nome 3: Paula']);

  const handleRemover = (index) => {
    setNomes((prevNomes) => prevNomes.filter((_, i) => i !== index)); // Remove o nome do índice especificado
  };

  return (
    <div>
      <h2>Lista de Nomes</h2>
      <ul>
        {nomes.map((n, index) => (
          <li key={index}>
            {n}
            <button onClick={() => handleRemover(index)} style={{ marginLeft: '10px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoverNome;
