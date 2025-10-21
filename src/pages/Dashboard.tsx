import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const userStats = {
    totalCourses: 3,
    completedCourses: 1,
    inProgressCourses: 2,
    totalHours: 47,
    certificates: 1,
    currentStreak: 7,
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/0478f7ec-d17a-4cae-96ce-ff1b429de3c5.jpg',
      progress: 65,
      totalLessons: 48,
      completedLessons: 31,
      lastAccessed: '2 часа назад',
      nextLesson: 'React компоненты',
    },
    {
      id: 2,
      title: 'Дизайн-мышление',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/c6df47d6-20af-49b9-ab4f-43cdd3bcab2d.jpg',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      lastAccessed: '1 день назад',
      nextLesson: 'Прототипирование',
    },
    {
      id: 3,
      title: 'Анализ данных на Python',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/62383fb7-efe3-4b8f-8d50-cd43bcddb2c2.jpg',
      progress: 100,
      totalLessons: 64,
      completedLessons: 64,
      lastAccessed: '1 неделя назад',
      nextLesson: 'Курс завершён',
      completed: true,
    },
  ];

  const achievements = [
    {
      icon: 'Trophy',
      title: 'Первый курс',
      description: 'Завершите первый курс',
      earned: true,
      date: '15 октября 2024',
    },
    {
      icon: 'Flame',
      title: 'Неделя подряд',
      description: 'Учитесь 7 дней подряд',
      earned: true,
      date: '20 октября 2024',
    },
    {
      icon: 'Target',
      title: '50% прогресс',
      description: 'Пройдите половину курса',
      earned: true,
      date: '18 октября 2024',
    },
    {
      icon: 'Star',
      title: 'Отличник',
      description: 'Получите 5 оценок "отлично"',
      earned: false,
      progress: 3,
      total: 5,
    },
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Завершите 10 уроков за неделю',
      earned: false,
      progress: 7,
      total: 10,
    },
  ];

  const recentActivity = [
    {
      type: 'lesson',
      title: 'Завершён урок "CSS Grid"',
      course: 'Веб-разработка с нуля',
      time: '2 часа назад',
      icon: 'Check',
    },
    {
      type: 'achievement',
      title: 'Получено достижение "Неделя подряд"',
      time: '1 день назад',
      icon: 'Award',
    },
    {
      type: 'lesson',
      title: 'Завершён урок "Эмпатия"',
      course: 'Дизайн-мышление',
      time: '1 день назад',
      icon: 'Check',
    },
    {
      type: 'certificate',
      title: 'Получен сертификат курса "Анализ данных"',
      time: '1 неделя назад',
      icon: 'Medal',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Отслеживайте свой прогресс и достижения</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Курсов в процессе</CardTitle>
                <Icon name="BookOpen" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.inProgressCourses}</div>
                <p className="text-xs text-muted-foreground">
                  Завершено: {userStats.completedCourses}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Часов обучения</CardTitle>
                <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.totalHours}</div>
                <p className="text-xs text-muted-foreground">В этом месяце</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Серия дней</CardTitle>
                <Icon name="Flame" className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.currentStreak}</div>
                <p className="text-xs text-muted-foreground">Дней подряд</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Сертификаты</CardTitle>
                <Icon name="Award" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.certificates}</div>
                <p className="text-xs text-muted-foreground">Получено</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList>
              <TabsTrigger value="courses">Мои курсы</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="activity">Активность</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-[200px_1fr] gap-6">
                      <div className="aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:py-6 md:pr-6 md:pl-0">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Последний доступ: {course.lastAccessed}
                            </p>
                          </div>
                          {course.completed && (
                            <Badge className="bg-green-100 text-green-800">
                              <Icon name="Check" className="h-3 w-3 mr-1" />
                              Завершён
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-2 text-sm">
                              <span className="text-muted-foreground">Прогресс</span>
                              <span className="font-semibold">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {course.completedLessons} из {course.totalLessons} уроков
                            </span>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            {!course.completed ? (
                              <>
                                <Button asChild>
                                  <Link to={`/course/${course.id}/learn`}>
                                    Продолжить обучение
                                  </Link>
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                  Следующий: {course.nextLesson}
                                </span>
                              </>
                            ) : (
                              <Button variant="outline" asChild>
                                <Link to={`/certificate/${course.id}`}>
                                  <Icon name="Award" className="h-4 w-4 mr-2" />
                                  Посмотреть сертификат
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center py-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/courses">
                    <Icon name="Plus" className="h-4 w-4 mr-2" />
                    Найти новые курсы
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={achievement.earned ? 'border-primary/50 bg-primary/5' : 'opacity-75'}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div
                          className={`h-12 w-12 rounded-full flex items-center justify-center ${
                            achievement.earned
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <Icon name={achievement.icon as any} className="h-6 w-6" />
                        </div>
                        {achievement.earned && (
                          <Icon name="Check" className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {achievement.earned ? (
                        <p className="text-sm text-muted-foreground">
                          Получено: {achievement.date}
                        </p>
                      ) : achievement.progress !== undefined ? (
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold">
                              {achievement.progress}/{achievement.total}
                            </span>
                          </div>
                          <Progress
                            value={(achievement.progress / achievement.total!) * 100}
                            className="h-2"
                          />
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">Ещё не получено</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Последняя активность</CardTitle>
                  <CardDescription>Ваши недавние действия на платформе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                      >
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon
                            name={activity.icon as any}
                            className="h-5 w-5 text-primary"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium">{activity.title}</p>
                          {activity.course && (
                            <p className="text-sm text-muted-foreground">{activity.course}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
