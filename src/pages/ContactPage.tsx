import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null
    }
  ];

  const faqItems = [
    {
      question: 'Как записаться на курс?',
      answer: 'Выберите интересующий курс в каталоге, нажмите кнопку "Записаться на курс" и следуйте инструкциям для оплаты. После оплаты вы сразу получите доступ к материалам.'
    },
    {
      question: 'Можно ли вернуть деньги за курс?',
      answer: 'Да, мы предоставляем 14-дневную гарантию возврата денег. Если курс вам не подошел, вы можете запросить полный возврат средств в течение первых 14 дней.'
    },
    {
      question: 'Как долго доступны материалы курса?',
      answer: 'После покупки курса вы получаете пожизненный доступ ко всем материалам. Вы можете проходить курс в удобном для вас темпе.'
    },
    {
      question: 'Выдаются ли сертификаты?',
      answer: 'Да, после успешного завершения курса вы получаете именной сертификат, который можно добавить в резюме и портфолио.'
    },
    {
      question: 'Есть ли поддержка преподавателей?',
      answer: 'Все курсы включают доступ к сообществу студентов и возможность задавать вопросы преподавателям через платформу.'
    },
    {
      question: 'Нужны ли специальные знания для начала?',
      answer: 'Каждый курс имеет указание уровня сложности. Для курсов начального уровня не требуется никаких предварительных знаний.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground">
              Есть вопросы? Мы всегда готовы помочь
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>

                  {isSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon name="CheckCircle2" className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                      <p className="text-muted-foreground">
                        Мы свяжемся с вами в ближайшее время
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Тема обращения *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="О чем вы хотите спросить?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Расскажите подробнее..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Icon name="Send" className="mr-2 h-5 w-5" />
                        Отправить сообщение
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{info.title}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Социальные сети</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Facebook" className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Twitter" className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Linkedin" className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Instagram" className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div id="faq" className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы о нашей платформе
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Не нашли ответ на свой вопрос?
              </p>
              <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Задайте вопрос через форму обратной связи
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
