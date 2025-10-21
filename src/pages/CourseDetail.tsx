import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CourseDetail = () => {
  const { id } = useParams();
  const [enrollmentProgress] = useState(65);

  const course = {
    id: Number(id),
    title: 'Веб-разработка с нуля',
    description: 'Полный курс по созданию современных веб-приложений с использованием React, TypeScript и Node.js. Научитесь создавать профессиональные сайты и приложения.',
    image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/0478f7ec-d17a-4cae-96ce-ff1b429de3c5.jpg',
    level: 'Начальный',
    duration: '12 недель',
    lessons: 48,
    students: 1234,
    rating: 4.8,
    reviews: 156,
    price: '14 990 ₽',
    instructor: {
      name: 'Иван Петров',
      title: 'Senior Full-Stack Developer',
      bio: 'Опыт разработки более 10 лет. Работал в крупных IT-компаниях.',
      students: 5000,
      courses: 12,
      rating: 4.9,
    },
    enrolled: true,
  };

  const modules = [
    {
      title: 'Введение в веб-разработку',
      lessons: 8,
      duration: '2 часа',
      completed: 8,
      topics: [
        { title: 'Как работает интернет', duration: '15 мин', completed: true },
        { title: 'HTML основы', duration: '20 мин', completed: true },
        { title: 'CSS стилизация', duration: '25 мин', completed: true },
        { title: 'Практика: первая страница', duration: '30 мин', completed: true },
      ],
    },
    {
      title: 'JavaScript для начинающих',
      lessons: 12,
      duration: '4 часа',
      completed: 7,
      topics: [
        { title: 'Переменные и типы данных', duration: '20 мин', completed: true },
        { title: 'Функции', duration: '25 мин', completed: true },
        { title: 'Массивы и объекты', duration: '30 мин', completed: false },
        { title: 'DOM манипуляции', duration: '35 мин', completed: false },
      ],
    },
    {
      title: 'React и TypeScript',
      lessons: 16,
      duration: '6 часов',
      completed: 0,
      topics: [
        { title: 'Введение в React', duration: '30 мин', completed: false },
        { title: 'Компоненты и Props', duration: '40 мин', completed: false },
        { title: 'State и Hooks', duration: '45 мин', completed: false },
        { title: 'TypeScript основы', duration: '50 мин', completed: false },
      ],
    },
    {
      title: 'Backend разработка',
      lessons: 12,
      duration: '5 часов',
      completed: 0,
      topics: [
        { title: 'Node.js введение', duration: '25 мин', completed: false },
        { title: 'Express.js', duration: '35 мин', completed: false },
        { title: 'REST API', duration: '40 мин', completed: false },
        { title: 'Базы данных', duration: '45 мин', completed: false },
      ],
    },
  ];

  const skills = [
    'HTML & CSS',
    'JavaScript ES6+',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'REST API',
    'Git & GitHub',
  ];

  const requirements = [
    'Компьютер с доступом в интернет',
    'Желание учиться и развиваться',
    'Базовые навыки работы с компьютером',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-green-100 text-green-800">{course.level}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">{course.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center">
                      <Icon name="Star" className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold mr-1">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Users" className="h-5 w-5 mr-1" />
                      {course.students} студентов
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="BookOpen" className="h-5 w-5 mr-1" />
                      {course.lessons} уроков
                    </div>
                  </div>
                </div>

                {course.enrolled && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Ваш прогресс</span>
                        <span className="text-2xl text-primary">{enrollmentProgress}%</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={enrollmentProgress} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-2">
                        Пройдено {Math.floor((enrollmentProgress / 100) * course.lessons)} из {course.lessons} уроков
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Tabs defaultValue="curriculum" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Программа</TabsTrigger>
                    <TabsTrigger value="about">О курсе</TabsTrigger>
                    <TabsTrigger value="instructor">Преподаватель</TabsTrigger>
                  </TabsList>

                  <TabsContent value="curriculum" className="space-y-4 mt-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {modules.map((module, index) => (
                        <AccordionItem
                          key={index}
                          value={`module-${index}`}
                          className="bg-background rounded-lg border"
                        >
                          <AccordionTrigger className="px-6 hover:no-underline">
                            <div className="flex items-center justify-between w-full pr-4">
                              <div className="text-left">
                                <div className="font-semibold mb-1">{module.title}</div>
                                <div className="text-sm text-muted-foreground">
                                  {module.lessons} уроков • {module.duration}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Progress
                                  value={(module.completed / module.lessons) * 100}
                                  className="w-24 h-2"
                                />
                                <span className="text-sm font-medium">
                                  {module.completed}/{module.lessons}
                                </span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6">
                            <div className="space-y-3 pt-3">
                              {module.topics.map((topic, topicIndex) => (
                                <div
                                  key={topicIndex}
                                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`h-6 w-6 rounded-full flex items-center justify-center ${
                                        topic.completed
                                          ? 'bg-primary text-primary-foreground'
                                          : 'border-2 border-muted-foreground/30'
                                      }`}
                                    >
                                      {topic.completed && (
                                        <Icon name="Check" className="h-4 w-4" />
                                      )}
                                    </div>
                                    <span className={topic.completed ? 'text-muted-foreground' : ''}>
                                      {topic.title}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-sm text-muted-foreground">
                                      {topic.duration}
                                    </span>
                                    {course.enrolled && (
                                      <Button size="sm" variant={topic.completed ? 'outline' : 'default'}>
                                        {topic.completed ? 'Повторить' : 'Начать'}
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="about" className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Чему вы научитесь</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {skills.map((skill, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Требования</h3>
                      <ul className="space-y-2">
                        {requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Circle" className="h-2 w-2 mt-2 shrink-0 fill-current" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="instructor" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-6">
                          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon name="User" className="h-12 w-12 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-1">{course.instructor.name}</h3>
                            <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                            <p className="mb-4">{course.instructor.bio}</p>
                            <div className="flex flex-wrap gap-6 text-sm">
                              <div className="flex items-center gap-2">
                                <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{course.instructor.rating}</span>
                                <span className="text-muted-foreground">рейтинг</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold">{course.instructor.students}</span>
                                <span className="text-muted-foreground">студентов</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon name="BookOpen" className="h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold">{course.instructor.courses}</span>
                                <span className="text-muted-foreground">курсов</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">{course.price}</div>
                      <p className="text-sm text-muted-foreground">Единоразовый платеж</p>
                    </div>

                    {course.enrolled ? (
                      <Button className="w-full" size="lg" asChild>
                        <Link to={`/course/${course.id}/learn`}>
                          Продолжить обучение
                          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg">
                        Записаться на курс
                      </Button>
                    )}

                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Clock" className="h-5 w-5 text-muted-foreground" />
                        <span>Доступ навсегда</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Smartphone" className="h-5 w-5 text-muted-foreground" />
                        <span>С любого устройства</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Award" className="h-5 w-5 text-muted-foreground" />
                        <span>Сертификат по окончанию</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="MessageCircle" className="h-5 w-5 text-muted-foreground" />
                        <span>Поддержка преподавателя</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
