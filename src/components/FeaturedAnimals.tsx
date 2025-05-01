
import AnimalCard from "./AnimalCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedAnimals = () => {
  const animals = [
    {
      id: 1,
      name: "Лев Алекс",
      species: "Африканский лев",
      description: "Величественный лев с грозной гривой, король нашего зоопарка. Обитает в просторном вольере, имитирующем африканскую саванну.",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Мелман",
      species: "Жираф сетчатый",
      description: "Высокий и грациозный жираф с уникальным узором пятен. Любит лакомиться листьями с верхушек деревьев.",
      imageUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Глория",
      species: "Гиппопотам",
      description: "Крупная и активная самка гиппопотама. Обожает купаться в своем бассейне и взаимодействовать с посетителями.",
      imageUrl: "https://images.unsplash.com/photo-1536849460588-696219a9e98d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Наши звезды</h2>
          <Button variant="outline">
            <Icon name="ChevronRight" size={16} />
            <span>Смотреть всех</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard 
              key={animal.id}
              name={animal.name}
              species={animal.species}
              description={animal.description}
              imageUrl={animal.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
