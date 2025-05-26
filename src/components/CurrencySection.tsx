import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const CurrencySection = () => {
  const [currencyAmount, setCurrencyAmount] = useState([50]);

  return (
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
  );
};

export default CurrencySection;
