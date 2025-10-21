import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();

  const course = {
    id: 1,
    title: 'Python для начинающих',
    description: 'Полный курс по программированию на Python для тех, кто начинает с нуля. Изучите основы языка, структуры данных, ООП и создайте свои первые проекты.',
    image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/7e5fb1c9-e59b-4540-9555-a31b2fc1c144.jpg',
    category: 'Программирование',
    duration: '8 недель',
    students: 1247,
    rating: 4.8,
    price: '3 990 ₽',
    level: 'Начальный',
    lessons: 42,
    hours: 24,
    certificate: true,
    author: {
      name: 'Иван Петров',
      role: 'Senior Python Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan'
    }
  };

  const curriculum = [
    {
      module: 'Введение в Python',
      lessons: [
        { title: 'Установка Python и настройка среды', duration: '15 мин', completed: true },
        { title: 'Первая программа на Python', duration: '20 мин', completed: true },
        { title: 'Переменные и типы данных', duration: '30 мин', completed: false },
        { title: 'Операторы и выражения', duration: '25 мин', completed: false }
      ]
    },
    {
      module: 'Управляющие конструкции',
      lessons: [
        { title: 'Условные операторы if-else', duration: '30 мин', completed: false },
        { title: 'Циклы for и while', duration: '35 мин', completed: false },
        { title: 'Практика: решение задач', duration: '45 мин', completed: false }
      ]
    },
    {
      module: 'Функции и модули',
      lessons: [
        { title: 'Создание и вызов функций', duration: '30 мин', completed: false },
        { title: 'Аргументы и возвращаемые значения', duration: '25 мин', completed: false },
        { title: 'Импорт модулей', duration: '20 мин', completed: false }
      ]
    },
    {
      module: 'Работа с данными',
      lessons: [
        { title: 'Списки и кортежи', duration: '40 мин', completed: false },
        { title: 'Словари и множества', duration: '35 мин', completed: false },
        { title: 'Работа с файлами', duration: '30 мин', completed: false }
      ]
    }
  ];

  const completedLessons = curriculum.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.completed).length, 0
  );
  const totalLessons = curriculum.reduce((acc, module) => acc + module.lessons.length, 0);
  const progress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{course.category}</Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                    <span>({course.students} отзывов)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    <span>{course.students} студентов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} />
                    <span>{course.hours} часов видео</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="BookOpen" size={18} />
                    <span>{course.lessons} уроков</span>
                  </div>
                </div>

                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
                />
              </div>

              <Tabs defaultValue="program" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="program">Программа</TabsTrigger>
                  <TabsTrigger value="about">О курсе</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>

                <TabsContent value="program" className="space-y-4">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Ваш прогресс</span>
                      <span className="text-sm text-muted-foreground">{completedLessons} из {totalLessons} уроков</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-semibold text-primary">{index + 1}</span>
                            </div>
                            <span className="font-semibold">{module.module}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-11">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <Icon name="CheckCircle2" size={20} className="text-green-500" />
                                  ) : (
                                    <Icon name="Circle" size={20} className="text-muted-foreground" />
                                  )}
                                  <span className={lesson.completed ? 'line-through text-muted-foreground' : ''}>
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Чему вы научитесь</h3>
                    <ul className="space-y-3">
                      {[
                        'Писать чистый и эффективный код на Python',
                        'Работать с переменными, типами данных и операторами',
                        'Использовать условия, циклы и функции',
                        'Работать со структурами данных: списки, словари, множества',
                        'Читать и записывать данные в файлы',
                        'Применять принципы объектно-ориентированного программирования'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Требования</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Базовые навыки работы с компьютером</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Желание учиться программированию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Никаких предварительных знаний не требуется</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">{course.rating}</div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Рейтинг курса</div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-3">
                            <span className="text-sm w-12">{stars} звезд</span>
                            <Progress value={stars === 5 ? 80 : stars === 4 ? 15 : 5} className="h-2" />
                            <span className="text-sm text-muted-foreground w-12 text-right">
                              {stars === 5 ? '80%' : stars === 4 ? '15%' : '5%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        name: 'Анна Смирнова',
                        rating: 5,
                        date: '2 дня назад',
                        text: 'Отличный курс для начинающих! Все объясняется понятно и доступно. Особенно понравились практические задания.'
                      },
                      {
                        name: 'Дмитрий Козлов',
                        rating: 5,
                        date: '1 неделю назад',
                        text: 'Прошел курс за месяц, уже начал применять знания в работе. Рекомендую!'
                      }
                    ].map((review, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-semibold text-primary">
                                  {review.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <CardTitle className="text-base">{review.name}</CardTitle>
                                <CardDescription>{review.date}</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{review.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground">Единоразовая оплата</p>
                  </div>

                  <Button className="w-full" size="lg">
                    Купить курс
                  </Button>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-start gap-3">
                      <Icon name="PlayCircle" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{course.hours} часов видео</div>
                        <div className="text-sm text-muted-foreground">Доступ навсегда</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{course.lessons} уроков</div>
                        <div className="text-sm text-muted-foreground">С практикой</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Award" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Сертификат</div>
                        <div className="text-sm text-muted-foreground">После завершения</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Smartphone" size={20} className="text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Доступ с любого устройства</div>
                        <div className="text-sm text-muted-foreground">ПК, планшет, телефон</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={course.author.avatar} 
                        alt={course.author.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{course.author.name}</div>
                        <div className="text-sm text-muted-foreground">{course.author.role}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Автор курса с 10+ летним опытом разработки
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
