import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "917009202340";
  const defaultMessage = "Hi! I'm interested in learning more about Manthan programs.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle size={28} />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden transform transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6B8E23] to-[#556B2F] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_visual-attract/artifacts/njoh62qk_MANTHAN%20Logo%20circle.png"
                    alt="Manthan"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Manthan</h3>
                  <p className="text-white/80 text-xs">Elite Leadership Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Manthan Team</span>
                </p>
                <p className="text-sm text-gray-600">
                  Hi there! 👋
                  <br /><br />
                  How can we help you today? Click below to start a conversation with us on WhatsApp.
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Start Chat on WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Usually replies within minutes
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingWhatsApp;
