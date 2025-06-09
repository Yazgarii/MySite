import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Send, Mail, Clock, Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Başarıyla Gönderildi!",
        description: "Mesajınız alınmıştır. En kısa sürede size dönüş yapacağız.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Hata Oluştu",
        description: "Mesajınız gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "yagizberk49@gmail.com",
      bgColor: "bg-white/20"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+90 544 257 77 60",
      bgColor: "bg-white/20"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cumartesi: 09:00 - 00:00",
      bgColor: "bg-white/20"
    }
  ];

  const socialMedia = [
    { icon: Instagram, href: "instagram.com/netrivaoffice" },
    { icon: Github, href: "github.com/Yazgarii" }
  ];

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-primary to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İletişime Geçin</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Projenizi konuşalım ve size özel bir teklif hazırlayalım
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Hemen Teklif Alın</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ad Soyad *</FormLabel>
                          <FormControl>
                            <Input placeholder="Adınız Soyadınız" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon *</FormLabel>
                          <FormControl>
                            <Input placeholder="0555 555 55 55" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-posta *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hizmet Türü</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kartvizit">Kartvizit Sitesi</SelectItem>
                            <SelectItem value="kurumsal">Kurumsal Web Sitesi</SelectItem>
                            <SelectItem value="eticaret">E-ticaret Sitesi</SelectItem>
                            <SelectItem value="mobil">Mobil Uygulama</SelectItem>
                            <SelectItem value="ozel">Özel Proje</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proje Detayları</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Projeniz hakkında detaylı bilgi verin..." 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Gönderiliyor..." : "Teklif Talep Et"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-8">İletişim Bilgileri</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className={`${info.bgColor} p-4 rounded-lg mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-blue-100">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/905551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl mr-3" />
                WhatsApp ile Hızlı İletişim
              </a>
              
              <a 
                href="mailto:yagizberk49@gmail.com" 
                className="flex items-center justify-center bg-white/20 text-white py-4 px-6 rounded-lg font-semibold hover:bg-white/30 transition-colors transform hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-3" />
                E-posta Gönder
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-12">
              <h4 className="font-semibold text-lg mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
