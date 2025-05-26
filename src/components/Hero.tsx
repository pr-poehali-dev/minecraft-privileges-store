import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;
