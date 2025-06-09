import { Zap, Shield, Palette, Headphones } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Zap,
      title: "Hız",
      description: "Hızlı teslimat ve performans odaklı çözümler",
      color: "bg-primary"
    },
    {
      icon: Shield,
      title: "Güven",
      description: "Güvenilir teknolojiler ve süreçler",
      color: "bg-accent"
    },
    {
      icon: Palette,
      title: "Tasarım",
      description: "Modern ve etkileyici tasarım anlayışı",
      color: "bg-purple-500"
    },
    {
      icon: Headphones,
      title: "Destek",
      description: "7/24 sürekli müşteri desteği",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-br from-blue-50 to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Netriva tarafından geliştirilen projeler, yüksek performans ve estetik odağında hazırlanır. 
              Modern web teknolojileri kullanarak, müşterilerimizin dijital varlıklarını güçlendiriyor, 
              işlerini online dünyada başarıya taşıyoruz.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Her projede kullanıcı deneyimini ön planda tutarak, mobil uyumlu, hızlı ve SEO dostu 
              çözümler sunuyoruz. Sizin başarınız, bizim başarımızdır.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`${value.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with computers and coding environment" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
