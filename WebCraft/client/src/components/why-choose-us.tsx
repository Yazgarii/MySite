import { Smartphone, Search, Rocket, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    description: "Tüm cihazlarda mükemmel görünüm ve kullanılabilirlik. Responsive tasarım garantisi ile her ekranda optimize edilmiş deneyim.",
    bgColor: "bg-blue-100",
    iconColor: "text-primary"
  },
  {
    icon: Search,
    title: "SEO Uyumlu",
    description: "Google'da üst sıralarda yer alın. SEO optimizasyonu ile organik trafiğinizi artırın ve daha fazla müşteriye ulaşın.",
    bgColor: "bg-green-100",
    iconColor: "text-accent"
  },
  {
    icon: Rocket,
    title: "Hızlı Teslimat",
    description: "Projelerinizi zamanında teslim ediyoruz. Hızlı geliştirme süreçleri ile işinizi kısa sürede dijitale taşıyın.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız. Teknik destek ve bakım hizmetleri ile sitenizin sürekli çalışması garanti altında.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesyonel çözümlerimizle fark yaratın ve rekabette öne geçin.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`${advantage.bgColor} ${advantage.iconColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
