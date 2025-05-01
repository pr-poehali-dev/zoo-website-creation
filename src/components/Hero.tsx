
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1572201419154-31772ff3057c?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.8)"
        }} 
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-30" /> {/* Дополнительный слой затемнения */}
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6">
        <div className="bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Добро пожаловать в <span className="text-green-300">ЗооМир</span>
          </h1>
          <p className="text-xl text-white mb-8">
            Откройте для себя удивительный мир животных. Познакомьтесь с редкими видами и проведите незабываемый день вместе с семьей.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Ticket" size={20} />
              <span>Купить билеты</span>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              <Icon name="Calendar" size={20} />
              <span>Расписание шоу</span>
            </Button>
          </div>
        </div>
        
        {/* Добавленное изображение животного */}
        <div className="absolute bottom-[-30px] right-10 md:right-20 w-[200px] md:w-[300px] hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=500&auto=format&fit=crop" 
            alt="Тигр" 
            className="object-contain drop-shadow-2xl animate-[bounce_4s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(0 0 15px rgba(0,0,0,0.5))" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
