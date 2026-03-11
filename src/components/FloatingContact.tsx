import { MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-72 animate-slideIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              <a
                href="tel:1-800-266-5247"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="text-sm font-semibold">Call Now</p>
                  <p className="text-xs">+91 9899188534</p>
                </div>
              </a>
              <a
                href="https://wa.me/919899188534"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-xs">Chat with us</p>
                </div>
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg transition-all"
              >
                <span className="text-sm font-semibold">Book Online</span>
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  );
}
