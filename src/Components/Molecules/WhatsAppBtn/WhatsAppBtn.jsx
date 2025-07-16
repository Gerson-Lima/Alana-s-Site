import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5583998219493" 
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5
        bg-green-500 hover:bg-green-600
        text-white rounded-full shadow-lg
        p-4 z-50
        transition-all duration-300
      "
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
