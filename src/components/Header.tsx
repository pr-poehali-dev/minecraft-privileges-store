import { Button } from "@/components/ui/button";
import { useServerStatus } from "@/hooks/useServerStatus";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { status, loading } = useServerStatus("d11.aurorix.net", 25047);
  const { toast } = useToast();

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText("mc.wollyworld.pro");
      toast({
        title: "IP скопирован!",
        description: "mc.wollyworld.pro",
      });
    } catch (err) {
      toast({
        title: "Ошибка копирования",
        description: "Не удалось скопировать IP адрес",
        variant: "destructive",
      });
    }
  };

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
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${status.isOnline ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <span className="text-slate-300">
                  Онлайн: {loading ? "..." : `${status.online}/${status.max}`}
                </span>
              </div>
              <button
                onClick={copyServerIP}
                className="text-green-400 hover:text-green-300 transition-colors cursor-pointer"
                title="Нажмите чтобы скопировать"
              >
                mc.wollyworld.pro
              </button>
            </div>

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
