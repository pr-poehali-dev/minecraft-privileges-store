import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">⛏</span>
            </div>
            <h1 className="text-2xl font-bold text-white">MineShop</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
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
          </div>

          <Button className="bg-green-500 hover:bg-green-600">Войти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
