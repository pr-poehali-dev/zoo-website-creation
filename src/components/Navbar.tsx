
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Животные", path: "/animals" },
    { name: "Билеты", path: "/tickets" },
    { name: "Расписание", path: "/schedule" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contacts" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="PawPrint" size={24} className={scrolled ? 'text-primary-foreground' : 'text-white'} />
            <span className={`text-xl font-bold ${scrolled ? 'text-primary-foreground' : 'text-white'}`}>
              ЗооМир
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className={`font-medium ${
                  scrolled ? 'text-primary-foreground hover:text-primary-foreground/80' : 'text-white hover:text-white/80'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Кнопка входа/регистрации на десктопе */}
          <div className="hidden md:block">
            <Button 
              variant={scrolled ? "secondary" : "outline"} 
              className={`
                ${scrolled 
                  ? 'bg-white text-primary hover:bg-white/90'
                  : 'bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm'
                }
              `}
            >
              <Icon name="UserPlus" size={18} />
              <span className="ml-2">Войти</span>
            </Button>
          </div>

          {/* Мобильное меню */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={scrolled ? 'text-primary-foreground md:hidden' : 'text-white md:hidden'}
              >
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full">
                <div className="py-6 border-b">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="PawPrint" size={24} className="text-primary" />
                    <span className="text-xl font-bold text-primary">ЗооМир</span>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-1 py-6">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={index} 
                      to={link.path}
                      className="py-3 px-4 hover:bg-secondary rounded-md text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto py-6 border-t">
                  <Button className="w-full bg-primary text-white">
                    <Icon name="UserPlus" size={18} />
                    <span className="ml-2">Войти / Регистрация</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
