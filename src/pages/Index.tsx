import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [currencyAmount, setCurrencyAmount] = useState([50]);

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

  const chests = [
    // Основные сундуки с вещами
    {
      name: "Сундук с Вещами (5 шт)",
      price: "99₽",
      items: "5 предметов",
      rarity: "Обычная",
    },
    {
      name: "Сундук с Вещами (10 шт)",
      price: "179₽",
      items: "10 предметов",
      rarity: "Обычная",
    },
    {
      name: "Сундук с Вещами (15 шт)",
      price: "265₽",
      items: "15 предметов",
      rarity: "Редкая",
    },
    // Сундуки с донатом
    {
      name: "Сундук с Донатом (x3)",
      price: "89₽",
      items: "3 доната",
      rarity: "Особая",
    },
    {
      name: "Сундук с Донатом (x10)",
      price: "199₽",
      items: "10 донатов",
      rarity: "Особая",
      popular: true,
    },
    {
      name: "Сундук с Донатом (x25)",
      price: "299₽",
      items: "25 донатов",
      rarity: "Эпическая",
    },
    // Сундуки с Валютой
    {
      name: "Сундук с Валютой (3 шт)",
      price: "49₽",
      items: "3 валюты",
      rarity: "Обычная",
    },
    {
      name: "Сундук с Валютой (10 шт)",
      price: "129₽",
      items: "10 валют",
      rarity: "Редкая",
    },
    {
      name: "Сундук с Валютой (25 шт)",
      price: "199₽",
      items: "25 валют",
      rarity: "Эпическая",
    },
    // Сундуки с Префиксами
    {
      name: "Сундук с Префиксами (3 шт)",
      price: "59₽",
      items: "3 префикса",
      rarity: "Редкая",
    },
    {
      name: "Сундук с Префиксами (10 шт)",
      price: "149₽",
      items: "10 префиксов",
      rarity: "Эпическая",
    },
    {
      name: "Сундук с Префиксами (25 шт)",
      price: "239₽",
      items: "25 префиксов",
      rarity: "Легендарная",
    },
    // Сундуки с Китами
    {
      name: "Сундук с Китами (3 шт)",
      price: "259₽",
      items: "3 кита",
      rarity: "Эпическая",
    },
    {
      name: "Сундук с Китами (5 шт)",
      price: "489₽",
      items: "5 китов",
      rarity: "Легендарная",
    },
    {
      name: "Сундук с Китами (10 шт)",
      price: "799₽",
      items: "10 китов",
      rarity: "Мифическая",
    },
    // Сундуки с Рилликами
    {
      name: "Сундук с Рилликами (1 шт)",
      price: "99₽",
      items: "1 риллик",
      rarity: "Редкая",
    },
    {
      name: "Сундук с Рилликами (3 шт)",
      price: "239₽",
      items: "3 риллика",
      rarity: "Эпическая",
    },
    {
      name: "Сундук с Рилликами (5 шт)",
      price: "389₽",
      items: "5 рилликов",
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

      {/* Динамическая секция валюты */}
      <section id="currency" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            💰 Игровая валюта
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                <div className="text-3xl">💰</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Покупка игровой валюты
                </h3>
                <p className="text-gray-600">Количество рилликов</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm text-gray-500">{currencyAmount[0]}</div>
              </div>
            </div>

            <div className="mb-8">
              <Slider
                value={currencyAmount}
                onValueChange={setCurrencyAmount}
                max={6000}
                min={50}
                step={5}
                className="w-full"
              />
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Отдаете</div>
                <div className="text-2xl font-bold text-gray-800">
                  {currencyAmount[0]}₽
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Получаете</div>
                <div className="text-2xl font-bold text-gray-800">
                  {currencyAmount[0]}R
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-colors flex items-center gap-2">
                ПРИОБРЕСТИ РИЛЛИКИ
                <span>→</span>
              </button>
              <div className="text-sm text-gray-500">
                Совершая оплату, вы соглашаетесь
                <br />
                со всеми условиями{" "}
                <span className="text-orange-500 underline">
                  пользовательского соглашения
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
