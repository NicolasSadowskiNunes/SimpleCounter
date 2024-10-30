import React, { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <p class="contagem-p" style={{ fontSize: '24px' }}>Contagem: {contagem}</p>
      <button className="botoes" onClick={() => setContagem(contagem + 1)} style={{ margin: '1rem', fontSize: '16px' }}>
        +1
      </button>
      <button className="botoes" onClick={() => setContagem(contagem - 1)} style={{ margin: '1rem', fontSize: '16px' }}>
        -1
      </button>
      <button className="botoes" onClick={() => setContagem(0)} style={{ margin: '1rem', fontSize: '16px' }}>
        Resetar
      </button>
    </div>
  );
}

export default Contador;
