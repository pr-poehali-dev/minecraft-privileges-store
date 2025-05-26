import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const privileges = [
    {
      name: "HERO",
      price: "39₽",
      features: ["Базовые команды", "Цветной ник", "Доступ в VIP зону"],
      color: "bg-green-500",
    },
    {
      name: "TITAN",
      price: "89₽",
      features: ["Все от HERO", "/fly", "Больше слотов", "Кит TITAN"],
      color: "bg-emerald-600",
    },
    {
      name: "AVENGER",
      price: "129₽",
      features: ["Все от TITAN", "/tp к игрокам", "WorldEdit", "Кит AVENGER"],
      color: "bg-purple-600",
    },
    {
      name: "MAGISTER",
      price: "579₽",
      features: ["Все от AVENGER", "/god", "Приватные команды", "Админ чат"],
      color: "bg-orange-500",
      popular: true,
    },
    {
      name: "OVERLORD",
      price: "289₽",
      features: ["Все от MAGISTER", "Расширенный WorldEdit", "Больше слотов"],
      color: "bg-cyan-500",
    },
    {
      name: "IMPERATOR",
      price: "999₽",
      features: ["Все от OVERLORD", "Полный доступ", "VIP поддержка"],
      color: "bg-red-500",
    },
    {
      name: "DRAGON",
      price: "1789₽",
      features: ["Все от IMPERATOR", "Уникальные возможности", "Приоритет"],
      color: "bg-violet-600",
    },
    {
      name: "HELPER",
      price: "6666₽",
      features: ["Помощник сервера", "Модерация", "Особые права"],
      color: "bg-blue-500",
    },
    {
      name: "COBRA",
      price: "6666₽",
      features: ["Максимальные привилегии", "Все возможности", "VIP статус"],
      color: "bg-green-700",
    },
  ];

  const currency = [
    {
      name: "Риллы",
      amount: "50",
      price: "50₽",
      bonus: "",
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
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
