import ProductCard from "./ProductCard";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  price: string;
  features?: string[];
  color?: string;
  popular?: boolean;
  amount?: string;
  bonus?: string;
  items?: string;
  rarity?: string;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  products: Product[];
  type: "privilege" | "currency" | "chest";
  bgClass?: string;
}

const ProductCategory = ({
  id,
  title,
  products,
  type,
  bgClass,
}: ProductCategoryProps) => {
  const [currencyAmount, setCurrencyAmount] = useState([50]);

  const getIcon = (type: string) => {
    switch (type) {
      case "privilege":
        return "👑";
      case "currency":
        return "💎";
      case "chest":
        return "📦";
      default:
        return "🎁";
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case "privilege":
        return "Купить";
      case "currency":
        return "Купить";
      case "chest":
        return "Открыть";
      default:
        return "Купить";
    }
  };

  const renderCurrencySlider = () => (
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
          💎
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Покупка игровой валюты
          </h3>
          <p className="text-white/70">Количество рилликов</p>
        </div>
        <div className="ml-auto text-right">
          <div className="text-3xl font-bold text-white">
            {currencyAmount[0]}
          </div>
          <div className="text-white/70 text-sm">максимум: 6000</div>
        </div>
      </div>

      <div className="mb-8">
        <Slider
          value={currencyAmount}
          onValueChange={setCurrencyAmount}
          max={6000}
          min={5}
          step={5}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <div className="text-white/70 text-sm mb-1">Отдаете</div>
            <div className="text-2xl font-bold text-white">
              {currencyAmount[0]}₽
            </div>
          </div>
          <div>
            <div className="text-white/70 text-sm mb-1">Получаете</div>
            <div className="text-2xl font-bold text-white">
              {currencyAmount[0]}R
            </div>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
          ПРИОБРЕСТИ РИЛЛИКИ →
        </Button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm">
          Совершая оплату, вы соглашаетесь со всеми условиями{" "}
          <span className="text-orange-400 underline cursor-pointer">
            пользовательского соглашения
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <section id={id} className={`py-16 ${bgClass || ""}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={
                type === "currency" ? `${product.amount} монет` : product.name
              }
              price={product.price}
              icon={getIcon(type)}
              iconBg={product.color || ""}
              features={product.features}
              description={
                type === "chest"
                  ? `🎁 ${product.items}\n⭐ ${product.rarity} редкость`
                  : undefined
              }
              bonus={product.bonus}
              popular={product.popular}
              buttonText={getButtonText(type)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
