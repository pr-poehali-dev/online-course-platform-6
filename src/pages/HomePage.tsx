import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      title: 'Веб-разработка с нуля',
      description: 'Освойте HTML, CSS, JavaScript и создайте свой первый сайт',
      students: 1250,
      rating: 4.8,
      duration: '12 недель'
    },
    {
      id: 2,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на самом популярном языке',
      students: 980,
      rating: 4.9,
      duration: '8 недель'
    },
    {
      id: 3,
      title: 'UI/UX дизайн',
      description: 'Научитесь создавать удобные и красивые интерфейсы',
      students: 750,
      rating: 4.7,
      duration: '10 недель'
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Обучайтесь онлайн с удобством
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Более 500 курсов от ведущих экспертов. Отслеживайте свой прогресс, получайте сертификаты и развивайте карьеру
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Найти курс
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создали платформу, которая делает онлайн-обучение максимально эффективным
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={feature.icon as any} className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Популярные курсы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Начните обучение с наших самых востребованных программ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Link to={`/course/${course.id}`}>
                      <Button className="w-full">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                Смотреть все курсы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Начните обучение сегодня
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки на нашей платформе
            </p>
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Выбрать курс
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
