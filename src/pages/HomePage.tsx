import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Широкий выбор курсов',
      description: 'Более 500 курсов по различным направлениям: программирование, дизайн, маркетинг и многое другое'
    },
    {
      icon: 'BarChart3',
      title: 'Отслеживание прогресса',
      description: 'Следите за своими достижениями, получайте статистику обучения и сертификаты'
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Учитесь у профессионалов с многолетним опытом работы в индустрии'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Обучайтесь в удобное время, доступ к материалам 24/7'
    }
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      category: 'Программирование',
      price: '4 990 ₽',
      rating: 4.8,
      students: 1234,
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/f03b9af0-04d4-43eb-a17d-e1a025c14b4d.jpg',
    },
    {
      id: 2,
      title: 'Python для анализа данных',
      category: 'Data Science',
      price: '5 990 ₽',
      rating: 4.9,
      students: 2156,
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/7e4271c6-aeff-479f-835e-a60eeec8735e.jpg',
    },
    {
      id: 3,
      title: 'UI/UX дизайн',
      category: 'Дизайн',
      price: '6 990 ₽',
      rating: 4.7,
      students: 987,
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/690cede7-e942-4fbc-a813-c8329fd3b377.jpg',
    },
  ];

  const stats = [
    { value: '10 000+', label: 'Студентов' },
    { value: '500+', label: 'Курсов' },
    { value: '100+', label: 'Экспертов' },
    { value: '95%', label: 'Удовлетворенность' },
  ];

  const faqItems = [
    {
      question: 'Как начать обучение?',
      answer: 'Зарегистрируйтесь на платформе, выберите интересующий курс и начните обучение сразу после оплаты.',
    },
    {
      question: 'Можно ли получить сертификат?',
      answer: 'Да, после успешного прохождения курса и выполнения всех заданий вы получите официальный сертификат.',
    },
    {
      question: 'Как отслеживать свой прогресс?',
      answer: 'В личном кабинете доступна подробная статистика: процент прохождения курсов, выполненные задания и достижения.',
    },
    {
      question: 'Есть ли доступ к материалам после завершения курса?',
      answer: 'Да, все материалы курса остаются доступными для вас без ограничений по времени.',
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Мы предлагаем возврат средств в течение 14 дней, если курс вам не подошел.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <Badge className="w-fit" variant="secondary">
                Онлайн-образование нового уровня
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Обучайтесь в своем темпе
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Получайте новые знания и навыки с помощью качественных онлайн-курсов от ведущих экспертов. 
                Отслеживайте свой прогресс и достигайте целей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/courses">
                    Выбрать курс
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/690cede7-e942-4fbc-a813-c8329fd3b377.jpg"
                alt="Онлайн обучение"
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша платформа предоставляет всё необходимое для эффективного онлайн-обучения
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Популярные курсы</h2>
              <p className="text-muted-foreground">Начните обучение с самых востребованных курсов</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/courses">
                Все курсы
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Users" className="h-4 w-4" />
                      <span>{course.students} студентов</span>
                    </div>
                    <div className="text-lg font-bold">{course.price}</div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to={`/course/${course.id}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы о нашей платформе
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Начните обучение сегодня</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки на нашей платформе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/courses">Выбрать курс</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Есть вопросы?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}