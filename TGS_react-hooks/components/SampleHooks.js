

import React, { useState, useEffect, useRef } from 'react';

function Contoh() {
  const [count, setCount] = useState(0);
  const clickRef = useRef(0);

  useEffect(() => {
    document.title = `Anda sudah klik ${count} kali`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    clickRef.current++;
  };

  return (
    <div>
      <p>Anda sudah klik {count} kali</p>
      <p>Total klik (menggunakan useRef): {clickRef.current}</p>
      <button onClick={handleClick}>
        Klik Aku
      </button>
    </div>
  );
}

export default Contoh;
