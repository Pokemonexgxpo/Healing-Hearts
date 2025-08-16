import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Healing Hearts</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('questions')}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                data-testid="button-nav-questions"
              >
                Questions
              </button>
              <button 
                onClick={() => scrollToSection('coping-wheel')}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                data-testid="button-nav-wheel"
              >
                Coping Wheel
              </button>
              <button 
                onClick={() => scrollToSection('quotes')}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                data-testid="button-nav-quotes"
              >
                Quotes
              </button>
              <button 
                onClick={() => scrollToSection('chat')}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                data-testid="button-nav-chat"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                data-testid="button-nav-crisis"
              >
                Crisis Help
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('questions')}
              className="block px-3 py-2 text-gray-600 hover:text-primary rounded-md text-base font-medium w-full text-left"
              data-testid="button-mobile-questions"
            >
              Questions
            </button>
            <button 
              onClick={() => scrollToSection('coping-wheel')}
              className="block px-3 py-2 text-gray-600 hover:text-primary rounded-md text-base font-medium w-full text-left"
              data-testid="button-mobile-wheel"
            >
              Coping Wheel
            </button>
            <button 
              onClick={() => scrollToSection('quotes')}
              className="block px-3 py-2 text-gray-600 hover:text-primary rounded-md text-base font-medium w-full text-left"
              data-testid="button-mobile-quotes"
            >
              Quotes
            </button>
            <button 
              onClick={() => scrollToSection('chat')}
              className="block px-3 py-2 text-gray-600 hover:text-primary rounded-md text-base font-medium w-full text-left"
              data-testid="button-mobile-chat"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="block px-3 py-2 bg-red-100 text-red-600 rounded-md text-base font-medium w-full text-left"
              data-testid="button-mobile-crisis"
            >
              Crisis Help
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
