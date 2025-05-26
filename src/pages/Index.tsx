import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const privileges = [
    {
      name: "VIP",
      price: "299₽",
      features: ["Цветной ник", "Приватные команды", "/fly", "Кит VIP"],
      color: "bg-green-500",
    },
    {
      name: "PREMIUM",
      price: "599₽",
      features: ["Все от VIP", "/tp к игрокам", "Больше слотов", "Кит PREMIUM"],
      color: "bg-blue-500",
      popular: true,
    },
    {
      name: "LEGEND",
      price: "999₽",
      features: ["Все от PREMIUM", "/god", "WorldEdit", "Админ чат"],
      color: "bg-purple-500",
    },
  ];

  const currency = [
    {
      amount: "1,000",
      price: "99₽",
      bonus: "",
    },
    {
      amount: "5,000",
      price: "399₽",
      bonus: "+500 бонус",
      popular: true,
    },
    {
      amount: "10,000",
      price: "699₽",
      bonus: "+2,000 бонус",
    },
  ];

  const chests = [
    {
      name: "Обычный сундук",
      price: "49₽",
      items: "5-10 предметов",
      rarity: "Обычная",
    },
    {
      name: "Редкий сундук",
      price: "149₽",
      items: "8-15 предметов",
      rarity: "Редкая",
      popular: true,
    },
    {
      name: "Легендарный сундук",
      price: "299₽",
      items: "15-25 предметов",
      rarity: "Легендарная",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⛏</span>
              </div>
              <h1 className="text-2xl font-bold text-white">MineShop</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#privileges"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Привилегии
              </a>
              <a
                href="#currency"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Валюта
              </a>
              <a
                href="#chests"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Сундуки
              </a>
            </nav>
            <Button className="bg-green-500 hover:bg-green-600">Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Прокачай свой <span className="text-green-400">Minecraft</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Покупай привилегии, игровую валюту и сундуки с ценными предметами на
            лучшем сервере
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-lg px-8"
            >
              🎮 Начать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800"
            >
              📋 Правила сервера
            </Button>
          </div>
        </div>
      </section>

      {/* Privileges Section */}
      <section id="privileges" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            ⭐ Привилегии
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {privileges.map((privilege, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform relative"
              >
                {privilege.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                    Популярное
                  </Badge>
                )}
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${privilege.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-white text-xl font-bold">👑</span>
                  </div>
                  <CardTitle className="text-white text-center text-2xl">
                    {privilege.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-3xl font-bold text-green-400">
                      {privilege.price}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {privilege.features.map((feature, i) => (
                      <li key={i} className="text-slate-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Currency Section */}
      <section id="currency" className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            💰 Игровая валюта
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currency.map((pack, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform relative"
              >
                {pack.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                    Выгодно
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">💎</div>
                  <CardTitle className="text-white text-2xl">
                    {pack.amount} монет
                  </CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-green-400">
                      {pack.price}
                    </span>
                    {pack.bonus && (
                      <div className="text-yellow-400 font-semibold mt-2">
                        {pack.bonus}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chests Section */}
      <section id="chests" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            📦 Сундуки с сокровищами
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {chests.map((chest, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform relative"
              >
                {chest.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                    Хит
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">📦</div>
                  <CardTitle className="text-white text-xl">
                    {chest.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-green-400">
                      {chest.price}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6 text-slate-300">
                    <p>🎁 {chest.items}</p>
                    <p>⭐ {chest.rarity} редкость</p>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Открыть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 MineShop. Лучший магазин для твоего сервера!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
