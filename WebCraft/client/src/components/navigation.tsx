import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary flex items-center">
              <Code className="mr-2" />
              Netriva
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('ana-sayfa')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('paketler')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Paketler
              </button>
              <button 
                onClick={() => scrollToSection('hakkimizda')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => scrollToSection('iletisim')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                İletişim
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('iletisim')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Hemen Teklif Al
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection('ana-sayfa')} 
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('paketler')} 
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
            >
              Paketler
            </button>
            <button 
              onClick={() => scrollToSection('hakkimizda')} 
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('iletisim')} 
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
            >
              İletişim
            </button>
            <Button 
              onClick={() => scrollToSection('iletisim')}
              className="block px-3 py-2 bg-primary text-primary-foreground mx-3 mt-4 w-auto"
            >
              Hemen Teklif Al
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
