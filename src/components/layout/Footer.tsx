import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'О платформе', href: '/about' },
      { name: 'Каталог курсов', href: '/courses' },
      { name: 'Преподавателям', href: '/teachers' },
      { name: 'Блог', href: '/blog' },
    ],
    support: [
      { name: 'Помощь', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Контакты', href: '/contact' },
      { name: 'Политика конфиденциальности', href: '/privacy' },
    ],
    social: [
      { name: 'Telegram', icon: 'MessageCircle', href: '#' },
      { name: 'VK', icon: 'Share2', href: '#' },
      { name: 'YouTube', icon: 'Youtube', href: '#' },
    ],
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="GraduationCap" className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduPlatform</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Современная платформа для онлайн-обучения с системой отслеживания прогресса
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                >
                  <Icon name={item.icon as any} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Платформа</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@eduplatform.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} EduPlatform. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
