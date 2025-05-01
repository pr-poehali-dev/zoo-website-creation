
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InfoSection = () => {
  const infoItems = [
    {
      icon: "Clock",
      title: "Часы работы",
      content: "Пн-Пт: 9:00 - 19:00\nСб-Вс: 9:00 - 20:00"
    },
    {
      icon: "Ticket",
      title: "Билеты",
      content: "Взрослый: 500₽\nДетский (4-14): 250₽\nЛьготный: 300₽"
    },
    {
      icon: "MapPin",
      title: "Как добраться",
      content: "ул. Зоологическая, 12\nМетро: Зоопарк\nАвтобусы: 12, 64, 91"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Информация для посетителей</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.content.split('\n').map((line, i) => (
                  <p key={i} className="text-gray-700">{line}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
