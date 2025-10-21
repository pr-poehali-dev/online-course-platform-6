import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Широкий выбор курсов',
      description: 'Более 1000 курсов по различным направлениям от ведущих экспертов',
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Система мониторинга успеваемости и достижений в реальном времени',
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получайте официальные сертификаты после завершения курсов',
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Общайтесь с преподавателями и другими студентами',
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное время в своем собственном темпе',
    },
    {
      icon: 'Smartphone',
      title: 'Доступ с любых устройств',
      description: 'Обучайтесь с компьютера, планшета или смартфона',
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Полный курс по созданию современных веб-приложений',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/0478f7ec-d17a-4cae-96ce-ff1b429de3c5.jpg',
      students: 1234,
      rating: 4.8,
      price: '14 990 ₽',
    },
    {
      id: 2,
      title: 'Дизайн-мышление',
      description: 'Освойте методы креативного решения задач',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/c6df47d6-20af-49b9-ab4f-43cdd3bcab2d.jpg',
      students: 856,
      rating: 4.9,
      price: '9 990 ₽',
    },
    {
      id: 3,
      title: 'Анализ данных на Python',
      description: 'Станьте профессиональным аналитиком данных',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/62383fb7-efe3-4b8f-8d50-cd43bcddb2c2.jpg',
      students: 2103,
      rating: 4.7,
      price: '19 990 ₽',
    },
  ];

  const faqs = [
    {
      question: 'Как начать обучение на платформе?',
      answer: 'Зарегистрируйтесь на платформе, выберите интересующий курс в каталоге и нажмите "Начать обучение". После оплаты вам откроется доступ ко всем материалам курса.',
    },
    {
      question: 'Можно ли получить сертификат?',
      answer: 'Да, после успешного завершения курса и прохождения итогового тестирования вы получите официальный сертификат о прохождении обучения.',
    },
    {
      question: 'Есть ли ограничения по времени доступа к курсу?',
      answer: 'После покупки курса доступ к материалам предоставляется навсегда. Вы можете проходить обучение в удобном для вас темпе.',
    },
    {
      question: 'Можно ли вернуть деньги за курс?',
      answer: 'Да, мы предоставляем гарантию возврата в течение 14 дней с момента покупки, если вы не удовлетворены качеством курса.',
    },
    {
      question: 'Как отслеживать свой прогресс?',
      answer: 'В личном кабинете доступна детальная статистика по каждому курсу: процент прохождения, выполненные задания, полученные баллы и достижения.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Обучайтесь онлайн в удобном темпе
                </h1>
                <p className="text-lg text-muted-foreground">
                  Современная платформа для онлайн-обучения с системой отслеживания прогресса. 
                  Тысячи курсов от ведущих экспертов в различных областях.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/courses">
                      Каталог курсов
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Связаться с нами</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Курсов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Студентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">4.8</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/62383fb7-efe3-4b8f-8d50-cd43bcddb2c2.jpg"
                  alt="Онлайн обучение"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Почему выбирают нас?</h2>
              <p className="text-lg text-muted-foreground">
                Мы создали современную образовательную платформу с лучшими инструментами для эффективного обучения
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-lg text-muted-foreground">
                Начните обучение с самых востребованных курсов нашей платформы
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {popularCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Users" className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center text-sm font-medium">
                        <Icon name="Star" className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{course.price}</span>
                      <Button asChild>
                        <Link to={`/course/${course.id}`}>Подробнее</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/courses">
                  Смотреть все курсы
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
                <p className="text-lg text-muted-foreground">
                  Ответы на популярные вопросы о нашей платформе
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-lg border px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Начните учиться уже сегодня
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки на нашей платформе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/signup">
                    Создать аккаунт бесплатно
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/courses">Каталог курсов</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
