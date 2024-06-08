// src/QRCodeGenerator.js

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {text && <QRCode value={text} size={256} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
