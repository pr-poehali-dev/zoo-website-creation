
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="PawPrint" size={24} />
              <h3 className="text-xl font-bold">ЗооМир</h3>
            </div>
            <p className="text-gray-400">
              Познавательный и увлекательный отдых для всей семьи в нашем зоопарке!
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Главная</Link></li>
              <li><Link to="/animals" className="hover:text-white">Животные</Link></li>
              <li><Link to="/schedule" className="hover:text-white">Расписание</Link></li>
              <li><Link to="/tickets" className="hover:text-white">Билеты</Link></li>
              <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Зоологическая, 12</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@zoomir.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Режим работы</h4>
            <ul className="space-y-2">
              <li>Пн-Пт: 9:00 - 19:00</li>
              <li>Сб-Вс: 9:00 - 20:00</li>
              <li className="text-yellow-300 mt-4">Кассы закрываются за час до закрытия зоопарка</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ЗооМир. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
