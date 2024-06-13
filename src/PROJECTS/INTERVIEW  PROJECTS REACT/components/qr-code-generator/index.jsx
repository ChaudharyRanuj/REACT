import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";
export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrCodeGenerator() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleQrCodeGenerator}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qr-code-generated" value={qrCode} size={400} />
      </div>
    </div>
  );
}
