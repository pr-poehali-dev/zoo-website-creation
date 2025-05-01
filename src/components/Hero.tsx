
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1572201419154-31772ff3057c?q=80&w=1920&auto=format&fit=crop')", 
          filter: "brightness(0.7)"
        }} 
      />
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Добро пожаловать в <span className="text-green-300">ЗооМир</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Откройте для себя удивительный мир животных. Познакомьтесь с редкими видами и проведите незабываемый день вместе с семьей.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="animate-pulse">
            <Icon name="Ticket" size={20} />
            <span>Купить билеты</span>
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white">
            <Icon name="Calendar" size={20} />
            <span>Расписание шоу</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
