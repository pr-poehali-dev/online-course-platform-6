import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на Python с нуля',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Программирование',
      duration: '8 недель',
      students: 1247,
      rating: 4.8,
      price: '3 990 ₽'
    },
    {
      id: 2,
      title: 'Веб-дизайн: от основ до профессионала',
      description: 'Создавайте красивые и функциональные интерфейсы',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/d8993be7-4379-4ba0-8452-1442b3dda9dd.jpg',
      category: 'Дизайн',
      duration: '10 недель',
      students: 892,
      rating: 4.9,
      price: '4 990 ₽'
    },
    {
      id: 3,
      title: 'JavaScript: современная разработка',
      description: 'Полный курс по JavaScript и React',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Программирование',
      duration: '12 недель',
      students: 2341,
      rating: 4.7,
      price: '5 990 ₽'
    }
  ];

  const features = [
    {
      icon: 'BookOpen',
      title: 'Качественный контент',
      description: 'Курсы от лучших экспертов индустрии'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Подтвердите свои знания официальным документом'
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Следите за своим развитием в реальном времени'
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Общайтесь с другими студентами и преподавателями'
    }
  ];

  const faqItems = [
    {
      question: 'Как начать обучение на платформе?',
      answer: 'Зарегистрируйтесь на платформе, выберите интересующий курс в каталоге и нажмите "Начать обучение". Доступ к материалам откроется сразу после оплаты.'
    },
    {
      question: 'Могу ли я учиться в своем темпе?',
      answer: 'Да, все курсы доступны в записи. Вы можете проходить их в удобное для вас время и в комфортном темпе.'
    },
    {
      question: 'Выдается ли сертификат после завершения?',
      answer: 'После успешного прохождения курса и выполнения всех заданий вы получите электронный сертификат, подтверждающий ваши знания.'
    },
    {
      question: 'Есть ли поддержка преподавателей?',
      answer: 'Да, в каждом курсе есть возможность задать вопросы преподавателю через форум или в личных сообщениях. Время ответа обычно составляет 24-48 часов.'
    },
    {
      question: 'Можно ли вернуть деньги за курс?',
      answer: 'Да, у нас действует политика возврата средств в течение 14 дней с момента покупки, если вы прошли менее 30% материала.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="w-fit">Образование будущего</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Учитесь в любое время, в любом месте
              </h1>
              <p className="text-lg text-muted-foreground">
                Тысячи качественных курсов от ведущих экспертов. Развивайте навыки и отслеживайте свой прогресс в режиме реального времени.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/catalog">
                    Выбрать курс
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/dashboard">
                    Мои курсы
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/7e5fb1c9-e59b-4540-9555-a31b2fc1c144.jpg" 
                alt="Обучение онлайн" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Популярные курсы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните обучение сегодня</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите курс из нашего каталога и начните развивать свои навыки прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4">{course.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <Button asChild>
                    <Link to={`/course/${course.id}`}>Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/catalog">
                Смотреть все курсы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Помощь</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о платформе
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать обучение?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки на нашей платформе
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/catalog">
              Выбрать курс
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
