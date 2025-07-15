import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // duração das animações em ms
      offset: 320,
      easing: 'ease',
      once: true,     // anima apenas uma vez
    });
  }, []);

  return (
    <div>
      <Home />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              background: '#ffffff',
              color: '#000',
              borderBottom: '4px solid #16A34A',
              fontWeight: 'bold',
              padding: '20px',
              fontSize: '1.1rem',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#ffffff',
              color: '#000',
              borderBottom: '4px solid #DC2626',
              fontWeight: 'bold',
              padding: '10px',
              fontSize: '1.1rem',
              minWidth: '300px',
              maxWidth: '600px',
            },
          },
        }}
      />
    </div>
  );
}
