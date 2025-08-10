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
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">MindSpace</span>
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
