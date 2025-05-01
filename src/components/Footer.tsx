
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      {/* Декоративное изображение следов животных */}
      <div className="absolute right-10 bottom-10 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1557887381-a7ead9f9745d?q=80&w=150&auto=format&fit=crop"
          alt="Следы животных"
          className="w-24"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="PawPrint" size={24} />
              <span className="text-xl font-bold">ЗооМир</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Наш зоопарк – удивительное место, где вы можете встретиться с редкими животными со всего мира и узнать больше о природе.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">Главная</Link></li>
              <li><Link to="/animals" className="text-primary-foreground/80 hover:text-primary-foreground">Животные</Link></li>
              <li><Link to="/schedule" className="text-primary-foreground/80 hover:text-primary-foreground">Расписание</Link></li>
              <li><Link to="/tickets" className="text-primary-foreground/80 hover:text-primary-foreground">Билеты</Link></li>
              <li><Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80">ул. Зоологическая, 12</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@zoomir.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Часы работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Пн-Пт:</span>
                <span className="text-primary-foreground">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Сб-Вс:</span>
                <span className="text-primary-foreground">9:00 - 20:00</span>
              </li>
              <li className="pt-2">
                <Button variant="secondary" size="sm" className="w-full bg-white text-primary">
                  <Icon name="CalendarDays" size={16} />
                  <span>Календарь событий</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} ЗооМир. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
