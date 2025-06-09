import { Button } from "@/components/ui/button";
import { Package, Rocket, Lock } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="ana-sayfa" className="pt-24 pb-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Modern, Hızlı ve 
            <span className="text-primary"> SEO Dostu</span> 
            Web Siteleri
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Kartvizit sitesinden e-ticarete, tüm çözümler tek elde. 
            Profesyonel web tasarım hizmetleri ile işinizi dijitale taşıyın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('paketler')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 shadow-lg text-lg px-8 py-4"
            >
              <Package className="mr-2 h-5 w-5" />
              Paketleri İncele
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('iletisim')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 shadow-lg text-lg px-8 py-4"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Hemen Teklif Al
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Visual */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-neutral-100 rounded-lg mx-4 h-6 flex items-center px-4">
                <Lock className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">www.example.com</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Modern web design showcase" 
              className="w-full h-48 object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
