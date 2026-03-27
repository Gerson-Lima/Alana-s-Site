import { useEffect, useState } from 'react';
import './Loading.css';

export function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Loading desaparece após 3 segundos (mais rápido)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <svg viewBox="0 0 138 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* BASE */}
          <path className="draw" id="base" d="M4 49.0686L133.867 49.0685" stroke="#2F2F2F" strokeWidth="1"/>

          {/* 4 verticais originais */}
          <line className="draw" id="v1" x1="40.42" y1="48.9434" x2="40.42" y2="13.6759" stroke="#2F2F2F" strokeWidth="1"/>
          <path className="draw" id="v2" d="M76.251 48.9434L76.251 16.195" stroke="#2F2F2F" strokeWidth="1"/>
          <line className="draw" id="v3"
            y1="-0.459846" x2="35.1813" y2="-0.459846"
            transform="matrix(4.37842e-08 -1 -1 -4.36387e-08 97.2129 48.8248)"
            stroke="#2F2F2F" strokeWidth="1"/>
          <path className="draw" id="v4" d="M61.8418 48.8248L61.8418 16.1565" stroke="#2F2F2F" strokeWidth="1"/>

          {/* Telhados */}
          <path className="draw" id="telhado-esq" d="M40.6267 13.6754L58.4266 0.458664" stroke="#2F2F2F" strokeWidth="1"/>
          <path className="draw" id="telhado-topo" d="M58.4326 0.457581L76.2512 16.1947" stroke="#2F2F2F" strokeWidth="1"/>

          <g className="draw" id="telhado-dir">
            <path d="M97.4671 13.6435L79.6671 0.459062" stroke="#2F2F2F" strokeWidth="1"/>
            <path d="M79.6602 0.457581L61.8416 16.1562" stroke="#2F2F2F" strokeWidth="1"/>
            <path d="M61.8418 16.1563V16.6591" stroke="#2F2F2F" strokeWidth="1"/>
          </g>

          {/* Fills */}
          <path className="fill" id="preench-esq" d="M41.542 14.2868L49.2864 8.45758V48.49H41.542V14.2868Z" fill="#F3E7D9"/>
          <path className="fill" id="preench-dir" d="M62.7314 16.7229L68.9329 11.1575L68.6887 48.5092H62.7314V16.7229Z" fill="#F3E7D9"/>

          {/* Corte por cima */}
          <path className="draw" id="corte" d="M24.8506 31.5748L113.017 31.5748" stroke="#2F2F2F" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  );
}
