
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-screen max-h-[800px] overflow-hidden">
      {/* Десктопное изображение - полноэкранное качественное фото животного */}
      <div 
        className="absolute inset-0 hidden md:block bg-center bg-cover transition-all duration-1000 ease-in-out" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2000&auto=format&fit=crop')",
          filter: "brightness(0.85)"
        }} 
      />
      
      {/* Мобильное изображение - более компактное и с лучшим кадрированием для маленьких экранов */}
      <div 
        className="absolute inset-0 block md:hidden bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200&auto=format&fit=crop')",
          filter: "brightness(0.8)"
        }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6 z-10">
        <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Добро пожаловать в <span className="text-green-300">ЗооМир</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Откройте для себя удивительный мир животных. Познакомьтесь с редкими видами и проведите незабываемый день вместе с семьей.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-all">
              <Icon name="Ticket" size={20} />
              <span>Купить билеты</span>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 transition-all">
              <Icon name="Calendar" size={20} />
              <span>Расписание шоу</span>
            </Button>
          </div>
        </div>
        
        {/* Индикатор прокрутки с анимацией */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Узнать больше</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2.5 bg-white/80 rounded-full animate-[bounce_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
