import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet Kaya",
    company: "E-ticaret Girişimcisi",
    content: "Yağız ile çalışmak gerçekten harika bir deneyimdi. E-ticaret sitemiz hayal ettiğimizden bile daha iyi oldu. Profesyonel yaklaşımı ve zamanında teslimatı mükemmeldi.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  },
  {
    name: "Elif Demir",
    company: "Marketing Müdürü",
    content: "Kurumsal web sitemiz için aldığımız hizmet beklentilerimizi aştı. SEO optimizasyonu sayesinde Google'da üst sıralarda yer alıyoruz. Teşekkürler!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  },
  {
    name: "Murat Özkan",
    company: "Teknoloji Girişimcisi",
    content: "Mobil uygulamamız için harika bir iş çıkardı. Kullanıcı dostu arayüz ve stabil çalışan sistem. Kesinlikle tavsiye ederim!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-muted-foreground">Müşterilerimizin memnuniyeti bizim için en önemli başarı göstergesi</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0</span>
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} fotoğrafı`} 
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
