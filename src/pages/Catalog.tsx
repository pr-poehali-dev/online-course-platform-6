import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на Python с нуля',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Программирование',
      duration: '8 недель',
      students: 1247,
      rating: 4.8,
      price: '3 990 ₽',
      level: 'Начальный'
    },
    {
      id: 2,
      title: 'Веб-дизайн: от основ до профессионала',
      description: 'Создавайте красивые и функциональные интерфейсы',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/d8993be7-4379-4ba0-8452-1442b3dda9dd.jpg',
      category: 'Дизайн',
      duration: '10 недель',
      students: 892,
      rating: 4.9,
      price: '4 990 ₽',
      level: 'Средний'
    },
    {
      id: 3,
      title: 'JavaScript: современная разработка',
      description: 'Полный курс по JavaScript и React',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Программирование',
      duration: '12 недель',
      students: 2341,
      rating: 4.7,
      price: '5 990 ₽',
      level: 'Продвинутый'
    },
    {
      id: 4,
      title: 'Цифровой маркетинг',
      description: 'Освойте инструменты продвижения в интернете',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Маркетинг',
      duration: '6 недель',
      students: 1567,
      rating: 4.6,
      price: '3 490 ₽',
      level: 'Начальный'
    },
    {
      id: 5,
      title: 'Data Science на Python',
      description: 'Анализ данных и машинное обучение',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/8fd3c692-c7d2-4311-99c9-545d7d207fbf.jpg',
      category: 'Программирование',
      duration: '14 недель',
      students: 987,
      rating: 4.9,
      price: '6 990 ₽',
      level: 'Продвинутый'
    },
    {
      id: 6,
      title: 'UI/UX дизайн интерфейсов',
      description: 'Проектирование пользовательских интерфейсов',
      image: 'https://cdn.poehali.dev/projects/57a6e078-001f-4b36-8ca7-a11eddc50e87/files/d8993be7-4379-4ba0-8452-1442b3dda9dd.jpg',
      category: 'Дизайн',
      duration: '9 недель',
      students: 1123,
      rating: 4.8,
      price: '4 490 ₽',
      level: 'Средний'
    }
  ];

  const categories = ['all', 'Программирование', 'Дизайн', 'Маркетинг'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Каталог курсов</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Найдите идеальный курс для развития своих навыков
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-3xl">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.filter(c => c !== 'all').map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{course.category}</Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">{course.level}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button asChild>
                      <Link to={`/course/${course.id}`}>Подробнее</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить критерии поиска
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
