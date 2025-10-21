import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  const userStats = {
    coursesInProgress: 3,
    coursesCompleted: 2,
    totalHours: 45,
    certificates: 2
  };

  const activeCourses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      progress: 35,
      nextLesson: 'CSS - стилизация сайтов',
      totalLessons: 24,
      completedLessons: 8,
      lastAccessed: '2 дня назад'
    },
    {
      id: 2,
      title: 'Python для начинающих',
      progress: 62,
      nextLesson: 'Работа с файлами',
      totalLessons: 18,
      completedLessons: 11,
      lastAccessed: 'Вчера'
    },
    {
      id: 3,
      title: 'UI/UX дизайн',
      progress: 18,
      nextLesson: 'Основы композиции',
      totalLessons: 20,
      completedLessons: 4,
      lastAccessed: 'Сегодня'
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: 'HTML для начинающих',
      completedDate: '15.09.2024',
      rating: 5,
      certificateUrl: '#'
    },
    {
      id: 5,
      title: 'Основы Git',
      completedDate: '28.08.2024',
      rating: 5,
      certificateUrl: '#'
    }
  ];

  const achievements = [
    { title: 'Первый курс', description: 'Завершили первый курс', icon: 'Award', unlocked: true },
    { title: 'Марафонец', description: 'Учитесь 7 дней подряд', icon: 'Flame', unlocked: true },
    { title: 'Целеустремленный', description: 'Завершите 5 курсов', icon: 'Target', unlocked: false },
    { title: 'Эксперт', description: 'Завершите 10 курсов', icon: 'Trophy', unlocked: false },
  ];

  const recentActivity = [
    { action: 'Завершен урок', title: 'Основы композиции', course: 'UI/UX дизайн', time: '2 часа назад' },
    { action: 'Получен сертификат', title: 'HTML для начинающих', course: '', time: '3 дня назад' },
    { action: 'Начат новый курс', title: 'UI/UX дизайн', course: '', time: '5 дней назад' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-8 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Личный кабинет</h1>
              <p className="text-muted-foreground mt-2">Отслеживайте свой прогресс обучения</p>
            </div>
            <Link to="/courses">
              <Button>
                <Icon name="Plus" className="mr-2 h-4 w-4" />
                Добавить курс
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Активные курсы</p>
                    <p className="text-3xl font-bold text-primary">{userStats.coursesInProgress}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="BookOpen" className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Завершено</p>
                    <p className="text-3xl font-bold text-accent">{userStats.coursesCompleted}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Часов обучения</p>
                    <p className="text-3xl font-bold">{userStats.totalHours}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Сертификаты</p>
                    <p className="text-3xl font-bold">{userStats.certificates}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active" className="space-y-6">
            <TabsList>
              <TabsTrigger value="active">Активные курсы</TabsTrigger>
              <TabsTrigger value="completed">Завершенные</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="activity">Активность</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {activeCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Следующий урок: {course.nextLesson}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{course.progress}%</div>
                          <div className="text-xs text-muted-foreground">{course.lastAccessed}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{course.completedLessons} из {course.totalLessons} уроков</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/course/${course.id}`} className="flex-1">
                          <Button className="w-full">
                            Продолжить обучение
                            <Icon name="PlayCircle" className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link to={`/course/${course.id}`}>
                          <Button variant="outline">
                            <Icon name="Info" className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {completedCourses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Завершен {course.completedDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              className={`h-4 w-4 ${
                                i < course.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>

                        <Button variant="outline" className="w-full">
                          <Icon name="Download" className="mr-2 h-4 w-4" />
                          Скачать сертификат
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={achievement.unlocked ? 'border-accent' : 'opacity-60'}>
                    <CardContent className="p-6 text-center">
                      <div
                        className={`h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                          achievement.unlocked ? 'bg-accent/10' : 'bg-muted'
                        }`}
                      >
                        <Icon
                          name={achievement.icon as any}
                          className={`h-8 w-8 ${
                            achievement.unlocked ? 'text-accent' : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.unlocked && (
                        <div className="mt-3">
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                            Получено
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Последняя активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Activity" className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.title}</p>
                          {activity.course && (
                            <p className="text-xs text-muted-foreground">Курс: {activity.course}</p>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
