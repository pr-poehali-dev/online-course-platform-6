import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="text-lg font-bold">EduPlatform</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательная платформа для онлайн-обучения с отслеживанием прогресса
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  О платформе
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Помощь
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@eduplatform.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EduPlatform. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;