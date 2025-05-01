
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="PawPrint" size={24} />
          <Link to="/" className="text-xl font-bold">ЗооМир</Link>
        </div>
        
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/animals" className="hover:underline">Животные</Link>
          <Link to="/schedule" className="hover:underline">Расписание</Link>
          <Link to="/tickets" className="hover:underline">Билеты</Link>
          <Link to="/contacts" className="hover:underline">Контакты</Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Clock" size={18} />
            <span>Режим работы</span>
          </Button>
          <Button variant="ghost" className="md:hidden text-primary-foreground">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
