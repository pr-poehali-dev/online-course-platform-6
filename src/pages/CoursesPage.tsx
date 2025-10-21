import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      title: 'Веб-разработка с нуля',
      description: 'Освойте HTML, CSS, JavaScript и React. Создайте портфолио из 5 проектов',
      category: 'programming',
      students: 1250,
      rating: 4.8,
      duration: '12 недель',
      level: 'Начальный',
      price: '15 990 ₽'
    },
    {
      id: 2,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на самом популярном языке',
      category: 'programming',
      students: 980,
      rating: 4.9,
      duration: '8 недель',
      level: 'Начальный',
      price: '12 990 ₽'
    },
    {
      id: 3,
      title: 'UI/UX дизайн',
      description: 'Научитесь создавать удобные и красивые интерфейсы в Figma',
      category: 'design',
      students: 750,
      rating: 4.7,
      duration: '10 недель',
      level: 'Средний',
      price: '18 990 ₽'
    },
    {
      id: 4,
      title: 'Цифровой маркетинг',
      description: 'Полный курс по интернет-маркетингу: SEO, контекст, SMM',
      category: 'marketing',
      students: 620,
      rating: 4.6,
      duration: '14 недель',
      level: 'Средний',
      price: '19 990 ₽'
    },
    {
      id: 5,
      title: 'Data Science и ML',
      description: 'Машинное обучение, анализ данных и нейронные сети на Python',
      category: 'programming',
      students: 540,
      rating: 4.9,
      duration: '16 недель',
      level: 'Продвинутый',
      price: '24 990 ₽'
    },
    {
      id: 6,
      title: 'Графический дизайн',
      description: 'Создание визуальных концепций в Adobe Photoshop и Illustrator',
      category: 'design',
      students: 480,
      rating: 4.5,
      duration: '8 недель',
      level: 'Начальный',
      price: '14 990 ₽'
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
              <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {course.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{course.duration}</span>
                    </div>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
