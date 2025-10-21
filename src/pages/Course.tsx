import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Course = () => {
  const { id } = useParams();
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);

  const course = {
    id: Number(id) || 1,
    title: 'Python для начинающих',
    description: 'Полный курс программирования на Python от основ до продвинутых концепций',
    image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
    category: 'Программирование',
    duration: '8 недель',
    lessons: 42,
    students: 1247,
    rating: 4.8,
    instructor: 'Иван Петров',
    price: '3 990 ₽',
    level: 'Начальный'
  };

  const modules = [
    {
      id: 1,
      title: 'Введение в Python',
      lessons: [
        { id: 1, title: 'Установка Python и настройка среды', duration: '15 мин', type: 'video' },
        { id: 2, title: 'Первая программа на Python', duration: '20 мин', type: 'video' },
        { id: 3, title: 'Переменные и типы данных', duration: '25 мин', type: 'video' },
        { id: 4, title: 'Практическое задание: Работа с переменными', duration: '30 мин', type: 'task' }
      ]
    },
    {
      id: 2,
      title: 'Основы программирования',
      lessons: [
        { id: 5, title: 'Условные операторы', duration: '22 мин', type: 'video' },
        { id: 6, title: 'Циклы: for и while', duration: '28 мин', type: 'video' },
        { id: 7, title: 'Функции в Python', duration: '30 мин', type: 'video' },
        { id: 8, title: 'Практика: Создание калькулятора', duration: '40 мин', type: 'task' }
      ]
    },
    {
      id: 3,
      title: 'Работа с данными',
      lessons: [
        { id: 9, title: 'Списки и кортежи', duration: '25 мин', type: 'video' },
        { id: 10, title: 'Словари и множества', duration: '30 мин', type: 'video' },
        { id: 11, title: 'Работа с файлами', duration: '35 мин', type: 'video' },
        { id: 12, title: 'Проект: Анализ данных', duration: '60 мин', type: 'task' }
      ]
    }
  ];

  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link to="/catalog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться к каталогу
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{course.category}</Badge>
              <Badge variant="outline">{course.level}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="User" size={18} className="text-muted-foreground" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={18} className="text-yellow-500" fill="currentColor" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-muted-foreground" />
                <span>{course.students.toLocaleString()} студентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curriculum">Программа</TabsTrigger>
                  <TabsTrigger value="about">О курсе</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Программа курса</CardTitle>
                      <CardDescription>
                        {totalLessons} уроков • Ваш прогресс: {Math.round(progress)}%
                      </CardDescription>
                      <Progress value={progress} className="mt-4" />
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {modules.map((module) => (
                          <AccordionItem key={module.id} value={`module-${module.id}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center justify-between w-full pr-4">
                                <span className="font-semibold">{module.title}</span>
                                <span className="text-sm text-muted-foreground">
                                  {module.lessons.length} урока
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {module.lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                                    onClick={() => toggleLesson(lesson.id)}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        completedLessons.includes(lesson.id)
                                          ? 'bg-primary border-primary'
                                          : 'border-muted-foreground'
                                      }`}>
                                        {completedLessons.includes(lesson.id) && (
                                          <Icon name="Check" size={14} className="text-white" />
                                        )}
                                      </div>
                                      <div>
                                        <div className="font-medium text-sm">{lesson.title}</div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                          <Icon 
                                            name={lesson.type === 'video' ? 'PlayCircle' : 'FileText'} 
                                            size={14} 
                                          />
                                          <span>{lesson.duration}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <Button size="sm" variant="ghost">
                                      <Icon name="Play" size={16} />
                                    </Button>
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

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>О курсе</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Что вы изучите</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                            <span>Основы синтаксиса Python и базовые концепции программирования</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                            <span>Работу с переменными, типами данных и структурами управления</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                            <span>Создание функций и модулей для организации кода</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                            <span>Работу со списками, словарями и другими структурами данных</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5" />
                            <span>Чтение и запись файлов, обработку исключений</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Требования</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="Dot" size={20} className="mt-0.5" />
                            <span>Базовые навыки работы с компьютером</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Dot" size={20} className="mt-0.5" />
                            <span>Желание учиться программированию</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Dot" size={20} className="mt-0.5" />
                            <span>Никакого опыта в программировании не требуется</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Отзывы студентов</CardTitle>
                      <CardDescription>Что говорят наши ученики</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b last:border-0 pb-6 last:pb-0">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="User" size={20} className="text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">Студент {review}</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Icon 
                                      key={i} 
                                      name="Star" 
                                      size={14} 
                                      className="text-yellow-500" 
                                      fill="currentColor" 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Отличный курс! Все объяснено очень понятно и доступно. Преподаватель всегда отвечает на вопросы.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Icon name="Play" size={28} className="text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">{course.price}</div>
                    <p className="text-sm text-muted-foreground">Единоразовая оплата</p>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Записаться на курс
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <Icon name="Heart" size={18} className="mr-2" />
                    В избранное
                  </Button>

                  <div className="pt-4 space-y-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Уроков</span>
                      <span className="font-semibold">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Продолжительность</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Уровень</span>
                      <span className="font-semibold">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Доступ</span>
                      <span className="font-semibold">Навсегда</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Award" size={18} />
                      <span>Сертификат по окончании</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Smartphone" size={18} />
                      <span>Доступ с любых устройств</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Download" size={18} />
                      <span>Материалы для скачивания</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Course;
