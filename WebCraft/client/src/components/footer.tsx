import { Code, Mail, Clock, Linkedin, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: "Ana Sayfa", section: "ana-sayfa" },
    { name: "Paketler", section: "paketler" },
    { name: "Hakkımızda", section: "hakkimizda" },
    { name: "İletişim", section: "iletisim" },
  ];

  const services = [
    { name: "Web Tasarım", href: "#" },
    { name: "E-ticaret", href: "#" },
    { name: "Mobil Uygulama", href: "#" },
    { name: "SEO Hizmeti", href: "#" },
  ];

  const contactDetails = [
    { icon: Mail, text: "yagizberk49@gmail.com" },
    { icon: FaWhatsapp, text: "+90 544 257 77 60" },
    { icon: Clock, text: "7/24 Destek" },
  ];

  const socialMedia = [
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "instagram.com/netrivaoffice" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4 flex items-center">
              <Code className="mr-2" />
              Netriva By Yağız
            </div>
            <p className="text-neutral-300 mb-4">
              Modern, hızlı ve SEO dostu web siteleri ile işinizi dijitale taşıyın.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="bg-neutral-700 p-2 rounded hover:bg-primary transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Menü</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-neutral-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              {contactDetails.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-center text-neutral-300">
                    <IconComponent className="h-4 w-4 mr-2" />
                    {contact.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2025 Tüm Hakları Saklıdır – Netriva By Yağız
          </p>
        </div>
      </div>
    </footer>
  );
}
