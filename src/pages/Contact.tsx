import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@eduplatform.ru',
      link: 'mailto:info@eduplatform.ru',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (800) 123-45-67',
      link: 'tel:+78001234567',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Примерная, д. 1',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ];

  const faqItems = [
    {
      question: 'Как я могу стать преподавателем на платформе?',
      answer: 'Свяжитесь с нами через форму обратной связи или напишите на teachers@eduplatform.ru',
    },
    {
      question: 'Есть ли техническая поддержка?',
      answer: 'Да, наша служба поддержки работает 24/7 и готова помочь вам по любым вопросам.',
    },
    {
      question: 'Можно ли получить корпоративное обучение?',
      answer: 'Да, мы предлагаем специальные условия для корпоративных клиентов. Свяжитесь с нами для обсуждения деталей.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
              <p className="text-lg text-muted-foreground">
                Мы всегда рады ответить на ваши вопросы и помочь вам
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={info.icon as any} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="MessageCircle" className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Share2" className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Youtube" className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Форма обратной связи</CardTitle>
                    <CardDescription>
                      Заполните форму, и мы ответим вам в ближайшее время
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Тема</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Тема сообщения"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Ваше сообщение"
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Отправить сообщение
                        <Icon name="Send" className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                    <CardDescription>Возможно, ответ на ваш вопрос уже здесь</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="pb-6 border-b last:border-0 last:pb-0">
                        <h3 className="font-semibold mb-2">{item.question}</h3>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Нужна помощь прямо сейчас?</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Наша служба поддержки всегда на связи
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="secondary"
                      className="w-full"
                      size="lg"
                    >
                      <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                      Открыть чат поддержки
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Посетите наш офис</h2>
              <p className="text-muted-foreground mb-8">
                Приглашаем вас посетить наш офис в Москве
              </p>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="MapPin" className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
