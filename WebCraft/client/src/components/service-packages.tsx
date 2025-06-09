import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Building, 
  Star, 
  TrendingUp, 
  Newspaper,
  Store,
  Crown,
  Users,
  Settings,
  Smartphone,
  Database,
  Cloud,
  RefreshCw,
  Shield,
  Search,
  Mail,
  MessageCircle,
  Globe,
  Headphones
} from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";

const webPackages = [
  { name: "Kartvizit Sitesi", description: "Temel sunum sitesi, 5 sayfa", price: "₺2.500", icon: Laptop },
  { name: "Kurumsal Web", description: "Profesyonel kurumsal site, blog sistemi", price: "₺4.500", icon: Building },
  { name: "Premium Web", description: "Gelişmiş özellikler, özel tasarım", price: "₺7.500", icon: Star, popular: true },
  { name: "Portföy Sitesi", description: "Sanatçı/tasarımcı portföy sitesi", price: "₺5.500", icon: TrendingUp },
  { name: "Blog/Haber", description: "İçerik yönetim sistemi, blog", price: "₺6.000", icon: Newspaper },
  { name: "Domain&Hosting", description: "Domain kurulumu ve hosting bağlantısı", price: "₺1.200/yıl", icon: Newspaper },
];

const ecommercePackages = [
  { name: "Temel E-Ticaret", description: "Basit ürün kataloğu, ödeme sistemi", price: "₺8.500", icon: Store },
  { name: "Profesyonel E-Ticaret", description: "Gelişmiş özellikler, entegrasyonlar", price: "₺15.000", icon: Crown, featured: true },
  { name: "B2B Portal", description: "Toptan satış, bayi sistemi", price: "₺25.000", icon: Users },
  { name: "Özel E-Ticaret", description: "Tamamen özelleştirilmiş çözüm", price: "Teklif Al", icon: Settings },
];

const mobileServices = [
  { name: "Mobil Uygulama", description: "iOS & Android hybrid app", price: "₺12.000", icon: Smartphone },
  { name: "Veritabanı Sistemi", description: "Özel veri yönetim paneli", price: "₺9.500", icon: Database },
  { name: "Web Uygulaması", description: "Dinamik web uygulama geliştirme", price: "₺18.000", icon: Cloud },
  { name: "API Entegrasyonu", description: "3. parti sistem entegrasyonları", price: "₺6.500", icon: RefreshCw },
  { name: "Güvenlik Sistemi", description: "SSL, güvenlik duvarı, backup", price: "₺4.500", icon: Shield },
];

const extraFeatures = [
  { name: "SEO Optimizasyonu", price: "₺1.500", icon: Search },
  { name: "Google Analytics", price: "₺800", icon: FaGoogle },
  { name: "E-posta Sistemi", price: "₺1.200", icon: Mail },
  { name: "WhatsApp Entegrasyonu", price: "₺600", icon: FaWhatsapp },
  { name: "Çoklu Dil Desteği", price: "₺2.500", icon: Globe },
  { name: "7/24 Teknik Destek", price: "₺200/ay", icon: Headphones },
];

export default function ServicePackages() {
  return (
    <section id="paketler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hizmet Paketlerimiz</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            İhtiyacınıza uygun paketlerle, profesyonel web çözümlerinizi keşfedin.
          </p>
        </div>

        {/* Web Site Paketleri */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <Laptop className="mr-3 text-primary" />
            Web Site Paketleri
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {webPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-all hover:scale-105 relative ${pkg.popular ? 'border-primary border-2' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground">Popüler</Badge>
                    </div>
                  )}
                  <CardContent className="pt-6 text-center">
                    <IconComponent className="h-8 w-8 text-primary mb-4 mx-auto" />
                    <h4 className="font-semibold text-lg mb-2">{pkg.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* E-Ticaret Sistemleri */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <Store className="mr-3 text-primary" />
            E-Ticaret Sistemleri
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecommercePackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-all hover:scale-105 ${pkg.featured ? 'border-accent border-2' : ''}`}>
                  <CardContent className="pt-6 text-center">
                    <IconComponent className="h-8 w-8 text-primary mb-4 mx-auto" />
                    <h4 className="font-semibold text-lg mb-2">{pkg.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mobil & Dinamik Sistemler */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <Smartphone className="mr-3 text-primary" />
            Mobil & Dinamik Sistemler
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mobileServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="pt-6 text-center">
                    <IconComponent className="h-8 w-8 text-primary mb-4 mx-auto" />
                    <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ekstra Özellikler */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <Settings className="mr-3 text-primary" />
            Ekstra Özellikler & Entegrasyonlar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <IconComponent className="h-6 w-6 text-primary mr-4" />
                      <div>
                        <h4 className="font-semibold">{feature.name}</h4>
                        <p className="text-muted-foreground text-sm">{feature.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
