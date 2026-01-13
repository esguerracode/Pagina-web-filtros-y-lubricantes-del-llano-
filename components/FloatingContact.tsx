
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Instagram, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end space-y-4">
      {isOpen && (
        <div className="flex flex-col space-y-4 mb-4 animate-in slide-in-from-bottom duration-300">
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
          >
            <span>WhatsApp</span>
            <MessageCircle className="w-5 h-5" />
          </a>
          <a 
            href="tel:+573143930345"
            className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
          >
            <span>Llamar</span>
            <Phone className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center space-x-3 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
          >
            <span>Email</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-[#FFDE00] hover:scale-110'}`}
      >
        {isOpen ? <X className="text-white w-8 h-8" /> : <MessageCircle className="text-black w-8 h-8" />}
      </button>
    </div>
  );
};

export default FloatingContact;
