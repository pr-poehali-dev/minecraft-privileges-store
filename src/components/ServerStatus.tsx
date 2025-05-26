import { useServerStatus } from "@/hooks/useServerStatus";
import { useToast } from "@/hooks/use-toast";

const ServerStatus = () => {
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
    <section className="py-12 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${status.isOnline ? "bg-green-500" : "bg-red-500"}`}
            />
            <span className="text-slate-300 text-lg">
              Онлайн: {loading ? "..." : `${status.online}/${status.max}`}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-slate-400">IP сервера:</span>
            <button
              onClick={copyServerIP}
              className="text-green-400 hover:text-green-300 transition-colors cursor-pointer text-lg font-mono bg-slate-700/50 px-3 py-1 rounded"
              title="Нажмите чтобы скопировать"
            >
              mc.wollyworld.pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;
