import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'programming', label: 'Программирование' },
    { value: 'design', label: 'Дизайн' },
    { value: 'business', label: 'Бизнес' },
    { value: 'marketing', label: 'Маркетинг' },
    { value: 'data', label: 'Данные' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Полный курс по созданию современных веб-приложений с использованием React, TypeScript и Node.js',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/0478f7ec-d17a-4cae-96ce-ff1b429de3c5.jpg',
      category: 'programming',
      level: 'Начальный',
      duration: '12 недель',
      lessons: 48,
      students: 1234,
      rating: 4.8,
      price: '14 990 ₽',
      instructor: 'Иван Петров',
    },
    {
      id: 2,
      title: 'Дизайн-мышление',
      description: 'Освойте методы креативного решения задач и создания пользовательских интерфейсов',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/c6df47d6-20af-49b9-ab4f-43cdd3bcab2d.jpg',
      category: 'design',
      level: 'Средний',
      duration: '8 недель',
      lessons: 32,
      students: 856,
      rating: 4.9,
      price: '9 990 ₽',
      instructor: 'Мария Соколова',
    },
    {
      id: 3,
      title: 'Анализ данных на Python',
      description: 'Станьте профессиональным аналитиком данных. Изучите pandas, numpy и машинное обучение',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/62383fb7-efe3-4b8f-8d50-cd43bcddb2c2.jpg',
      category: 'data',
      level: 'Продвинутый',
      duration: '16 недель',
      lessons: 64,
      students: 2103,
      rating: 4.7,
      price: '19 990 ₽',
      instructor: 'Алексей Морозов',
    },
    {
      id: 4,
      title: 'Digital-маркетинг',
      description: 'Комплексный курс по продвижению бизнеса в интернете',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/0478f7ec-d17a-4cae-96ce-ff1b429de3c5.jpg',
      category: 'marketing',
      level: 'Начальный',
      duration: '10 недель',
      lessons: 40,
      students: 1567,
      rating: 4.6,
      price: '12 990 ₽',
      instructor: 'Елена Волкова',
    },
    {
      id: 5,
      title: 'UI/UX дизайн',
      description: 'Создавайте привлекательные и удобные интерфейсы',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/c6df47d6-20af-49b9-ab4f-43cdd3bcab2d.jpg',
      category: 'design',
      level: 'Средний',
      duration: '12 недель',
      lessons: 48,
      students: 1892,
      rating: 4.8,
      price: '16 990 ₽',
      instructor: 'Дмитрий Ковалев',
    },
    {
      id: 6,
      title: 'Управление проектами',
      description: 'Научитесь эффективно управлять командой и проектами',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/62383fb7-efe3-4b8f-8d50-cd43bcddb2c2.jpg',
      category: 'business',
      level: 'Средний',
      duration: '8 недель',
      lessons: 32,
      students: 1345,
      rating: 4.7,
      price: '11 990 ₽',
      instructor: 'Ольга Смирнова',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-100 text-green-800';
      case 'Средний':
        return 'bg-yellow-100 text-yellow-800';
      case 'Продвинутый':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Каталог курсов
              </h1>
              <p className="text-lg text-muted-foreground">
                Выберите курс для развития своих навыков
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Поиск курсов..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-sm text-muted-foreground">
              Найдено курсов: {filteredCourses.length}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Clock" className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Icon name="BookOpen" className="h-4 w-4 mr-1" />
                        {course.lessons} уроков
                      </div>
                      <div className="flex items-center">
                        <Icon name="Users" className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center font-medium">
                        <Icon name="Star" className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="User" className="h-4 w-4 mr-1" />
                      {course.instructor}
                    </div>

                    <div className="pt-4 border-t flex items-center justify-between">
                      <span className="text-2xl font-bold">{course.price}</span>
                      <Button asChild>
                        <Link to={`/course/${course.id}`}>
                          Подробнее
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры поиска или выбрать другую категорию
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
