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
