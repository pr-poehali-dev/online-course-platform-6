import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

  const course = {
    id: Number(id),
    title: 'Веб-разработка с нуля',
    description: 'Комплексный курс по веб-разработке для начинающих',
    longDescription: 'Этот курс даст вам все необходимые знания для старта карьеры веб-разработчика. Вы изучите HTML, CSS, JavaScript, React и создадите 5 полноценных проектов для портфолио.',
    students: 1250,
    rating: 4.8,
    reviewsCount: 342,
    duration: '12 недель',
    level: 'Начальный',
    price: '15 990 ₽',
    instructor: {
      name: 'Иван Петров',
      title: 'Senior Full-stack Developer',
      avatar: 'IP',
      students: 5420,
      courses: 8
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
        ]
      },
      {
        id: 2,
        title: 'CSS - стилизация сайтов',
        duration: '3 часа',
        lessons: [
          { id: 5, title: 'Основы CSS', duration: '25 мин', completed: false },
          { id: 6, title: 'Flexbox и Grid', duration: '40 мин', completed: false },
          { id: 7, title: 'Адаптивная верстка', duration: '35 мин', completed: false },
        ]
      },
      {
        id: 3,
        title: 'JavaScript для начинающих',
        duration: '5 часов',
        lessons: [
          { id: 8, title: 'Переменные и типы данных', duration: '30 мин', completed: false },
          { id: 9, title: 'Функции и условия', duration: '40 мин', completed: false },
          { id: 10, title: 'Работа с DOM', duration: '50 мин', completed: false },
        ]
      },
    ],
    learningOutcomes: [
      'Создавать адаптивные сайты с нуля',
      'Работать с HTML, CSS и JavaScript',
      'Использовать React для создания интерфейсов',
      'Публиковать проекты в интернете',
      'Создать портфолио из 5 проектов'
    ],
    requirements: [
      'Компьютер или ноутбук',
      'Желание учиться',
      'Не требуется опыт программирования'
    ]
  };

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter(l => l.completed).length, 
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mt-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground">{course.description}</p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500 fill-yellow-500" />
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
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                  {course.instructor.avatar}
                </div>
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground">Единоразовый платеж</p>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Записаться на курс
                  </Button>

                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold">Этот курс включает:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Video" className="h-4 w-4 text-muted-foreground" />
                        <span>20 часов видео</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="FileText" className="h-4 w-4 text-muted-foreground" />
                        <span>15 статей</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Download" className="h-4 w-4 text-muted-foreground" />
                        <span>Материалы для скачивания</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" className="h-4 w-4 text-muted-foreground" />
                        <span>Сертификат по окончании</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Infinity" className="h-4 w-4 text-muted-foreground" />
                        <span>Доступ навсегда</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="content">Программа</TabsTrigger>
              <TabsTrigger value="about">О курсе</TabsTrigger>
              <TabsTrigger value="progress">Прогресс</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <div className="space-y-2 mb-6">
                <h2 className="text-2xl font-bold">Программа курса</h2>
                <p className="text-muted-foreground">
                  {course.modules.length} модулей • {totalLessons} уроков
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {course.modules.map((module) => (
                  <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center gap-3">
                          <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{module.title}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{module.duration}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between py-2 px-3 hover:bg-muted/50 rounded-md">
                            <div className="flex items-center gap-3">
                              {lesson.completed ? (
                                <Icon name="CheckCircle2" className="h-4 w-4 text-accent" />
                              ) : (
                                <Icon name="Circle" className="h-4 w-4 text-muted-foreground" />
                              )}
                              <span className="text-sm">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="about" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">О курсе</h2>
                <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Чему вы научитесь</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-accent mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Требования</h3>
                <div className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="Dot" className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Преподаватель</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-semibold text-primary">
                        {course.instructor.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{course.instructor.name}</h4>
                        <p className="text-muted-foreground mb-3">{course.instructor.title}</p>
                        <div className="flex gap-6 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Users" className="h-4 w-4" />
                            <span>{course.instructor.students} студентов</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="BookOpen" className="h-4 w-4" />
                            <span>{course.instructor.courses} курсов</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ваш прогресс</h2>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Общий прогресс</span>
                      <span className="text-2xl font-bold text-primary">{progressPercent}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{completedLessons} из {totalLessons} уроков завершено</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Прогресс по модулям</h3>
                <div className="space-y-4">
                  {course.modules.map((module) => {
                    const moduleCompleted = module.lessons.filter(l => l.completed).length;
                    const moduleTotal = module.lessons.length;
                    const modulePercent = Math.round((moduleCompleted / moduleTotal) * 100);

                    return (
                      <Card key={module.id}>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{module.title}</h4>
                              <span className="text-sm font-medium text-primary">{modulePercent}%</span>
                            </div>
                            <Progress value={modulePercent} className="h-2" />
                            <p className="text-xs text-muted-foreground">
                              {moduleCompleted} из {moduleTotal} уроков
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
