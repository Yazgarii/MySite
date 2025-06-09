import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Teslim süresi nedir?",
    answer: "Proje karmaşıklığına göre değişmekle birlikte, basit kartvizit siteleri 2-3 iş günü, kurumsal siteler 1-3 hafta, e-ticaret sistemleri ise 3-4 hafta içinde teslim edilir."
  },
  {
    question: "SEO paketi ne içeriyor?",
    answer: "SEO paketimiz; anahtar kelime analizi, meta etiketleri optimizasyonu, sayfa hızı iyileştirmesi, Google Analytics kurulumu, XML sitemap oluşturma ve 3 aylık SEO takibi içerir."
  },
  {
    question: "E-ticaret altyapısı nasıl çalışıyor?",
    answer: "Modern e-ticaret sistemimiz; ürün yönetimi, stok takibi, sipariş yönetimi, ödeme entegrasyonları (kredi kartı, havale, kapıda ödeme), kargo entegrasyonları ve detaylı raporlama içerir."
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer: "Ödeme %50 avans, %50 teslim sırasında olmak üzere iki taksitte alınır. Banka havalesi veya EFT ile ödeme yapabilirsiniz."
  },
  {
    question: "Bakım ve destek hizmeti var mı?",
    answer: "Evet, tüm projelerimiz için 6 ay garanti ve 1 yıl ücretsiz teknik destek sunuyoruz. Ek olarak aylık bakım paketlerimiz de mevcuttur."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sık Sorulan Sorular</h2>
          <p className="text-xl text-muted-foreground">Merak ettiklerinizin cevapları burada</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <CardContent className="pt-0 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
