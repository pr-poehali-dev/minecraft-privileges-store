import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import Footer from "@/components/Footer";

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
      name: "Монеты",
      amount: "1,000",
      price: "99₽",
      bonus: "",
    },
    {
      name: "Монеты",
      amount: "5,000",
      price: "399₽",
      bonus: "+500 бонус",
      popular: true,
    },
    {
      name: "Монеты",
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
      <Header />
      <Hero />
      <ProductCategory
        id="privileges"
        title="⭐ Привилегии"
        products={privileges}
        type="privilege"
      />
      <ProductCategory
        id="currency"
        title="💰 Игровая валюта"
        products={currency}
        type="currency"
        bgClass="bg-slate-800/50"
      />
      <ProductCategory
        id="chests"
        title="📦 Сундуки с сокровищами"
        products={chests}
        type="chest"
      />
      <Footer />
    </div>
  );
};

export default Index;
