import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import CurrencySection from "@/components/CurrencySection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { privileges } from "@/data/privileges";
import { chests } from "@/data/chests";

const Index = () => {
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
      <CurrencySection />
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
