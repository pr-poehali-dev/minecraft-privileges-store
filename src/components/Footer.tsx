import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
              <h3 className="text-white font-bold text-lg">MINESHOP</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              © 2025 MineShop. Все права защищены.
            </p>
            <p className="text-slate-400 text-sm">
              ИП Кондратьев Михаил Сергеевич
              <br />
              ИНН: 780446233080
              <br />
              ОГРНИП: 321784700352257
            </p>
            <p className="text-slate-400 text-sm mt-2">
              admin@mineshop.me (ПН-ПТ 10:00-18:00 МСК)
            </p>
          </div>

          {/* Правовая информация */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Правовая информация
            </h4>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">
                MineShop не связан с MojangAB.
              </p>
              <p className="text-slate-400 text-sm">
                Все средства идут на развитие проекта
              </p>
              <p className="text-slate-400 text-sm">
                Коммерческая деятельность проекта
                <br />
                соответствует политике Mojang AB
              </p>
              <div className="space-y-1 mt-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm block transition-colors"
                >
                  Договор Оферты
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Форум
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Правила
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Описание привилегий
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Способы оплаты
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm block transition-colors"
              >
                Проверка через AnyDesk
              </a>
            </div>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="text-white font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Youtube" size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Hash" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            Лучший магазин для твоего сервера!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
