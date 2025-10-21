import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function CoursePage() {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      description: 'Освойте HTML, CSS, JavaScript и React. Создайте портфолио из 5 проектов',
      category: 'Программирование',
      price: '4 990 ₽',
      rating: 4.8,
      students: 1234,
      reviewsCount: 342,
      duration: '12 недель',
      level: 'Начальный',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/f03b9af0-04d4-43eb-a17d-e1a025c14b4d.jpg',
      instructor: {
        name: 'Иван Петров',
        title: 'Senior Full-stack Developer',
        avatar: 'ИП',
        students: 5420,
        courses: 8,
        bio: 'Опытный разработчик с 10+ годами опыта в веб-разработке. Помог тысячам студентов начать карьеру в IT.',
      },
      modules: [
        {
          id: 1,
          title: 'Введение в HTML',
          duration: '2 часа',
          lessons: [
            { id: 1, title: 'Что такое HTML', duration: '15 мин', completed: true },
            { id: 2, title: 'Структура HTML документа', duration: '20 мин', completed: true },
            { id: 3, title: 'Основные теги', duration: '30 мин', completed: false },
            { id: 4, title: 'Практика: создаем первую страницу', duration: '45 мин', completed: false },
          ],
        },
        {
          id: 2,
          title: 'CSS - стилизация сайтов',
          duration: '3 часа',
          lessons: [
            { id: 5, title: 'Основы CSS', duration: '25 мин', completed: false },
            { id: 6, title: 'Flexbox и Grid', duration: '40 мин', completed: false },
            { id: 7, title: 'Адаптивная верстка', duration: '35 мин', completed: false },
          ],
        },
        {
          id: 3,
          title: 'JavaScript для начинающих',
          duration: '5 часов',
          lessons: [
            { id: 8, title: 'Переменные и типы данных', duration: '30 мин', completed: false },
            { id: 9, title: 'Функции и условия', duration: '40 мин', completed: false },
            { id: 10, title: 'Работа с DOM', duration: '50 мин', completed: false },
          ],
        },
      ],
      learningOutcomes: [
        'Создавать адаптивные сайты с нуля',
        'Работать с HTML, CSS и JavaScript',
        'Использовать React для создания интерфейсов',
        'Публиковать проекты в интернете',
        'Создать портфолио из 5 проектов',
      ],
      requirements: [
        'Компьютер или ноутбук',
        'Желание учиться',
        'Не требуется опыт программирования',
      ],
    },
  ];

  const course = courses.find((c) => c.id === Number(id)) || courses[0];

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((l) => l.completed).length,
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="flex flex-col">
      <section className="relative">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      <section className="py-12 -mt-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">{course.category}</Badge>
                  <CardTitle className="text-3xl">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" className="h-5 w-5 text-primary fill-primary" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviewsCount} отзывов)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" className="h-5 w-5 text-muted-foreground" />
                      <span>{course.students} студентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="h-5 w-5 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BarChart3" className="h-5 w-5 text-muted-foreground" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                      {course.instructor.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{course.instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="content" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content">Программа</TabsTrigger>
                  <TabsTrigger value="about">О курсе</TabsTrigger>
                  <TabsTrigger value="instructor">Преподаватель</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Программа курса</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.modules.length} модулей • {totalLessons} уроков
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-2">
                        {course.modules.map((module) => (
                          <AccordionItem
                            key={module.id}
                            value={`module-${module.id}`}
                            className="border rounded-lg px-4"
                          >
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex items-center justify-between w-full pr-4">
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-primary">
                                      {module.id}
                                    </span>
                                  </div>
                                  <span className="font-semibold text-left">{module.title}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {module.duration}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-4">
                                {module.lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted/50"
                                  >
                                    <div className="flex items-center gap-3">
                                      {lesson.completed ? (
                                        <Icon
                                          name="CheckCircle2"
                                          className="h-5 w-5 text-green-500"
                                        />
                                      ) : (
                                        <Icon
                                          name="Circle"
                                          className="h-5 w-5 text-muted-foreground"
                                        />
                                      )}
                                      <span className="text-sm">{lesson.title}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {lesson.duration}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="about" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Чему вы научитесь</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {course.learningOutcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Требования</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {course.requirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Icon name="Dot" className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-semibold text-primary">
                          {course.instructor.avatar}
                        </div>
                        <div>
                          <CardTitle>{course.instructor.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {course.instructor.title}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{course.instructor.bio}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {course.instructor.students.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Студентов</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {course.instructor.courses}
                          </div>
                          <div className="text-sm text-muted-foreground">Курсов</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground">Единоразовый платеж</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                      Записаться на курс
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <Link to="/dashboard">
                        <Icon name="Play" className="mr-2 h-5 w-5" />
                        Начать обучение
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold">Этот курс включает:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Icon name="Video" className="h-5 w-5 text-primary" />
                        <span>20 часов видео</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" className="h-5 w-5 text-primary" />
                        <span>15 статей</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Download" className="h-5 w-5 text-primary" />
                        <span>Материалы для скачивания</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Award" className="h-5 w-5 text-primary" />
                        <span>Сертификат по окончании</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Infinity" className="h-5 w-5 text-primary" />
                        <span>Доступ навсегда</span>
                      </div>
                    </div>
                  </div>

                  {progressPercent > 0 && (
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">Ваш прогресс</span>
                        <span className="text-muted-foreground">{progressPercent}%</span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {completedLessons} из {totalLessons} уроков пройдено
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
