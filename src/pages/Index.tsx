import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mobileShops = [
    {
      id: 1,
      name: "Продукты у дома",
      type: "Продукты",
      status: "online",
      distance: "200м",
      eta: "5 мин",
      location: "ул. Пушкина, 15",
    },
    {
      id: 2,
      name: "Свежий хлеб",
      type: "Выпечка",
      status: "online",
      distance: "450м",
      eta: "8 мин",
      location: "Центральная площадь",
    },
    {
      id: 3,
      name: "Мясная лавка",
      type: "Мясо",
      status: "offline",
      distance: "1.2км",
      eta: "15 мин",
      location: "пр. Мира, 32",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">МобилКарта</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-large">
                <Icon name="Map" size={20} className="mr-2" />
                Карта
              </Button>
              <Button variant="ghost" className="text-large">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Регистрация
              </Button>
              <Button variant="ghost" className="text-large">
                <Icon name="Phone" size={20} className="mr-2" />
                Поддержка
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Найдите передвижные
            <br />
            <span className="text-primary">магазины рядом</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Отслеживайте местоположение передвижных магазинов в реальном
            времени. Простой и понятный интерфейс для людей любого возраста.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-large">
              <Icon name="Search" size={24} className="mr-2" />
              Найти магазины
            </Button>
            <Button variant="outline" size="lg" className="btn-large">
              <Icon name="PlusCircle" size={24} className="mr-2" />
              Зарегистрировать магазин
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-96">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={24}
                      className="mr-2 text-primary"
                    />
                    Интерактивная карта
                  </CardTitle>
                  <CardDescription className="text-large">
                    Передвижные магазины в вашем районе
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon
                        name="Map"
                        size={48}
                        className="mx-auto text-muted-foreground mb-4"
                      />
                      <p className="text-large text-muted-foreground">
                        Карта загружается...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Shops List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Магазины поблизости</h3>
              {mobileShops.map((shop) => (
                <Card
                  key={shop.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-large">{shop.name}</h4>
                      <Badge
                        variant={
                          shop.status === "online" ? "default" : "secondary"
                        }
                        className="ml-2"
                      >
                        {shop.status === "online" ? "В сети" : "Не в сети"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{shop.type}</p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        {shop.distance}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {shop.eta}
                      </span>
                    </div>
                    <p className="text-sm mt-2">{shop.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Возможности сервиса
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="font-bold text-xl mb-2">Отслеживание</h4>
              <p className="text-muted-foreground text-large">
                Местоположение в реальном времени
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Bell"
                size={48}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="font-bold text-xl mb-2">Уведомления</h4>
              <p className="text-muted-foreground text-large">
                Оповещения о приближении магазина
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Filter"
                size={48}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="font-bold text-xl mb-2">Фильтры</h4>
              <p className="text-muted-foreground text-large">
                Поиск по типу товаров
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                size={48}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="font-bold text-xl mb-2">Поддержка</h4>
              <p className="text-muted-foreground text-large">
                Круглосуточная помощь
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Зарегистрируйте свой передвижной магазин
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Присоединяйтесь к нашей платформе и позвольте клиентам легко
                найти ваш магазин. Увеличьте продажи и расширьте клиентскую
                базу.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-primary mr-3"
                  />
                  <span className="text-large">Бесплатная регистрация</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-primary mr-3"
                  />
                  <span className="text-large">Простое управление</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-primary mr-3"
                  />
                  <span className="text-large">Больше клиентов</span>
                </div>
              </div>
              <Button size="lg" className="btn-large">
                <Icon name="UserPlus" size={24} className="mr-2" />
                Начать регистрацию
              </Button>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Truck"
                  size={64}
                  className="mx-auto text-muted-foreground mb-4"
                />
                <p className="text-large text-muted-foreground">
                  Изображение регистрации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="font-bold text-xl">МобилКарта</span>
              </div>
              <p className="text-muted-foreground text-large">
                Платформа для поиска передвижных магазинов
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Покупателям</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Найти магазины
                  </a>
                </li>
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Как пользоваться
                  </a>
                </li>
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Мобильное приложение
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Продавцам</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Регистрация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-large hover:text-primary">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span className="text-large">8-800-555-35-35</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span className="text-large">help@mobilkarta.ru</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span className="text-large">24/7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-large">
              © 2024 МобилКарта. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
