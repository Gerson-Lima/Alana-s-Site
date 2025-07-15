import { Home }  from './pages/Home'
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div> 
      <Home/>
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
              minWidth: '300px',   // 👈 aumenta largura mínima
              maxWidth: '600px', 
            },
          },
        }}
      />
    </div>
  )
}
