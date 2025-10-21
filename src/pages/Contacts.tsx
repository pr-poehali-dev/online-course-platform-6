import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
export default function Contacts() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@eduplatform.ru',
      link: 'mailto:info@eduplatform.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (800) 123-45-67',
      link: 'tel:+78001234567'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Примерная, д. 1',
      link: null
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>
                    Заполните форму и мы ответим вам в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <Input
                        id="subject"
                        placeholder="Тема вашего сообщения"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите подробнее..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить сообщение
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={info.icon} size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Остались вопросы?</CardTitle>
                  <CardDescription className="text-white/80">
                    Наша служба поддержки готова помочь вам
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Headphones" size={24} />
                    <span>Служба поддержки работает 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={24} />
                    <span>Среднее время ответа: 2 часа</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} />
                    <span>Более 50,000 довольных студентов</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Мы в социальных сетях</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {[
                      { icon: 'Facebook', link: '#' },
                      { icon: 'Twitter', link: '#' },
                      { icon: 'Instagram', link: '#' },
                      { icon: 'Linkedin', link: '#' },
                      { icon: 'Youtube', link: '#' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center group"
                      >
                        <Icon name={social.icon} size={24} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}