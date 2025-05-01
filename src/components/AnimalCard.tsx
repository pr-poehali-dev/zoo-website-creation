
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface AnimalCardProps {
  name: string;
  species: string;
  description: string;
  imageUrl: string;
}

const AnimalCard = ({ name, species, description, imageUrl }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{species}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Icon name="Info" size={16} />
          <span>Подробнее</span>
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="MapPin" size={16} />
          <span>Найти на карте</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;
