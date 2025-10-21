import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const userCourses = [
    {
      id: 1,
      title: 'Python для начинающих',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      progress: 35,
      totalLessons: 42,
      completedLessons: 15,
      lastAccessed: '2 часа назад',
      nextLesson: 'Переменные и типы данных'
    },
    {
      id: 2,
      title: 'JavaScript: современная разработка',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      progress: 68,
      totalLessons: 56,
      completedLessons: 38,
      lastAccessed: '1 день назад',
      nextLesson: 'React Hooks: useEffect'
    },
    {
      id: 3,
      title: 'Веб-дизайн: от основ до профессионала',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/d8993be7-4379-4ba0-8452-1442b3dda9dd.jpg',
      progress: 100,
      totalLessons: 48,
      completedLessons: 48,
      lastAccessed: '3 дня назад',
      nextLesson: 'Курс завершен',
      completed: true
    }
  ];

  const achievements = [
    { title: 'Первый шаг', description: 'Начните первый курс', icon: 'Award', earned: true },
    { title: 'Неделя обучения', description: 'Учитесь 7 дней подряд', icon: 'Flame', earned: true },
    { title: 'Половина пути', description: 'Пройдите 50% любого курса', icon: 'Target', earned: true },
    { title: 'Мастер', description: 'Завершите 3 курса', icon: 'Crown', earned: false },
    { title: 'Марафонец', description: 'Учитесь 30 дней подряд', icon: 'Trophy', earned: false },
    { title: 'Эксперт', description: 'Получите 5 сертификатов', icon: 'Star', earned: false }
  ];

  const learningStats = {
    totalHours: 47,
    completedCourses: 1,
    activeCourses: 2,
    certificates: 1,
    streak: 7
  };

  const recentActivity = [
    {
      course: 'Python для начинающих',
      lesson: 'Условные операторы if-else',
      date: '2 часа назад',
      type: 'completed'
    },
    {
      course: 'JavaScript: современная разработка',
      lesson: 'React Hooks: useState',
      date: '1 день назад',
      type: 'completed'
    },
    {
      course: 'Веб-дизайн',
      lesson: 'Финальный проект',
      date: '3 дня назад',
      type: 'completed'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-8 md:py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Мой кабинет</h1>
            <p className="text-muted-foreground">Отслеживайте свой прогресс и продолжайте обучение</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Всего часов</CardDescription>
                <CardTitle className="text-3xl">{learningStats.totalHours}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Icon name="TrendingUp" size={16} />
                  <span>+12 за неделю</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Завершено</CardDescription>
                <CardTitle className="text-3xl">{learningStats.completedCourses}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">курсов</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Активных</CardDescription>
                <CardTitle className="text-3xl">{learningStats.activeCourses}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">курсов</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Сертификаты</CardDescription>
                <CardTitle className="text-3xl">{learningStats.certificates}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">получено</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Серия дней</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2">
                  {learningStats.streak}
                  <Icon name="Flame" size={24} className="text-orange-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">подряд</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">Мои курсы</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="activity">Активность</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid gap-6">
                {userCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full md:w-48 h-48 object-cover"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Последний раз: {course.lastAccessed}
                            </p>
                          </div>
                          {course.completed && (
                            <Badge className="bg-green-500">
                              <Icon name="Check" size={14} className="mr-1" />
                              Завершен
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="font-medium">Прогресс</span>
                              <span className="text-muted-foreground">
                                {course.completedLessons} из {course.totalLessons} уроков
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="text-sm text-muted-foreground">
                              {!course.completed && (
                                <>
                                  Следующий урок: <span className="text-foreground font-medium">{course.nextLesson}</span>
                                </>
                              )}
                              {course.completed && (
                                <span className="text-green-600 font-medium">🎉 Поздравляем с завершением!</span>
                              )}
                            </div>
                            <Button asChild>
                              <Link to={`/course/${course.id}`}>
                                {course.completed ? 'Повторить' : 'Продолжить'}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/catalog">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить новый курс
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className={`${achievement.earned ? 'border-primary bg-primary/5' : 'opacity-60'}`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          achievement.earned ? 'bg-primary text-white' : 'bg-muted'
                        }`}>
                          <Icon name={achievement.icon} size={32} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    {achievement.earned && (
                      <CardContent>
                        <Badge variant="secondary">
                          <Icon name="Check" size={14} className="mr-1" />
                          Получено
                        </Badge>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>Прогресс достижений</CardTitle>
                  <CardDescription>Вы получили {achievements.filter(a => a.earned).length} из {achievements.length} достижений</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={(achievements.filter(a => a.earned).length / achievements.length) * 100} className="h-3" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Недельная активность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between gap-2 h-40">
                      {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => {
                        const height = [60, 80, 45, 90, 75, 30, 95][index];
                        return (
                          <div key={day} className="flex-1 flex flex-col items-center gap-2">
                            <div 
                              className="w-full bg-primary rounded-t-lg transition-all hover:bg-primary/80"
                              style={{ height: `${height}%` }}
                            />
                            <span className="text-xs text-muted-foreground">{day}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Последняя активность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="CheckCircle2" size={20} className="text-green-500" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.lesson}</p>
                            <p className="text-sm text-muted-foreground">{activity.course}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{activity.date}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
