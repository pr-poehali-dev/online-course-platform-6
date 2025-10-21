import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'programming', label: 'Программирование' },
    { value: 'design', label: 'Дизайн' },
    { value: 'marketing', label: 'Маркетинг' },
    { value: 'business', label: 'Бизнес' },
    { value: 'languages', label: 'Языки' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      description: 'Освойте HTML, CSS, JavaScript и React. Создайте портфолио из 5 проектов',
      category: 'programming',
      categoryLabel: 'Программирование',
      students: 1234,
      rating: 4.8,
      duration: '12 недель',
      level: 'Начальный',
      price: '4 990 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/f03b9af0-04d4-43eb-a17d-e1a025c14b4d.jpg'
    },
    {
      id: 2,
      title: 'Python для анализа данных',
      description: 'Изучите Python, pandas, numpy. Анализируйте данные и стройте модели',
      category: 'programming',
      categoryLabel: 'Программирование',
      students: 2156,
      rating: 4.9,
      duration: '10 недель',
      level: 'Средний',
      price: '5 990 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/7e4271c6-aeff-479f-835e-a60eeec8735e.jpg'
    },
    {
      id: 3,
      title: 'UI/UX дизайн',
      description: 'Научитесь создавать удобные и красивые интерфейсы в Figma',
      category: 'design',
      categoryLabel: 'Дизайн',
      students: 987,
      rating: 4.7,
      duration: '8 недель',
      level: 'Средний',
      price: '6 990 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/690cede7-e942-4fbc-a813-c8329fd3b377.jpg'
    },
    {
      id: 4,
      title: 'Цифровой маркетинг',
      description: 'Полный курс по интернет-маркетингу: SEO, контекст, SMM',
      category: 'marketing',
      categoryLabel: 'Маркетинг',
      students: 820,
      rating: 4.6,
      duration: '12 недель',
      level: 'Начальный',
      price: '7 990 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/f03b9af0-04d4-43eb-a17d-e1a025c14b4d.jpg'
    },
    {
      id: 5,
      title: 'Data Science и ML',
      description: 'Машинное обучение, анализ данных и нейронные сети на Python',
      category: 'programming',
      categoryLabel: 'Программирование',
      students: 640,
      rating: 4.9,
      duration: '16 недель',
      level: 'Продвинутый',
      price: '9 990 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/7e4271c6-aeff-479f-835e-a60eeec8735e.jpg'
    },
    {
      id: 6,
      title: 'Графический дизайн',
      description: 'Создание визуальных концепций в Adobe Photoshop и Illustrator',
      category: 'design',
      categoryLabel: 'Дизайн',
      students: 580,
      rating: 4.5,
      duration: '6 недель',
      level: 'Начальный',
      price: '5 490 ₽',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/690cede7-e942-4fbc-a813-c8329fd3b377.jpg'
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Каталог курсов</h1>
            <p className="text-lg text-muted-foreground">
              Найдите идеальный курс для развития ваших навыков
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск курсов..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[240px]">
                <SelectValue placeholder="Категория" />
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
      </section>

      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.categoryLabel}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Users" className="h-4 w-4" />
                      <span>{course.students} студентов</span>
                    </div>
                    <div className="text-lg font-bold">{course.price}</div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/course/${course.id}`}>
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры поиска
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}