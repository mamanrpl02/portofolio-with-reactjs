    import React from "react";
import "./"; // gaya modal kamu

export default function Modal({ isOpen, onClose, imgSrc, alt }) {
  if (!isOpen) return null; // kalau modal tidak aktif, jangan render apa-apa

  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img
        className="modal-content"
        src={imgSrc}
        alt={alt}
        onClick={(e) => e.stopPropagation()} // biar klik gambar ga nutup modal
      />
    </div>
  );
}
