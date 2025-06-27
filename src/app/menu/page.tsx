"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { useCart } from '../components/CartContext';

function Marquee({ text }: { text: string }) {
  // Делаем длинную строку с пробелами между словами, чтобы заполнить ширину экрана
  const repeatCount = 20;
  const displayText = Array(repeatCount).fill(text).join('   ');
  // Медленнее для длинных названий
  const isLong = text.length > 15;
  const duration = isLong ? 24 : 12;
  return (
    <div className="overflow-hidden w-full mb-8 relative h-[120px]">
      <div className="absolute top-0 left-0 flex animate-marquee2 whitespace-nowrap w-max min-w-full" style={{ animationDuration: `${duration}s` }}>
        <span className="text-[#8EC63F] text-8xl font-black font-montserrat uppercase tracking-widest select-none">
          {displayText}
        </span>
      </div>
      <style jsx>{`
        .animate-marquee2 {
          animation: marquee2 linear infinite;
        }
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const menu = [
  {
    title: "БУРГЕРЫ",
    products: [
      { name: 'Гамбургер', img: '/burgers/гамбургер.png', price: 170 },
      { name: 'Чизбургер', img: '/burgers/чизбургер.png', price: 190 },
      { name: 'Грибной чизбургер', img: '/burgers/грибной чизбургер.png', price: 230 },
      { name: 'Чикен терияки', img: '/burgers/чикен терияки.png', price: 290 },
      { name: 'Чикен чиз бекон', img: '/burgers/чикен чиз бекон.png', price: 250 },
      { name: 'Фиш бургер', img: '/burgers/фиш бургер.png', price: 280 },
      { name: 'Биг мак', img: '/burgers/биг мак.png', price: 310 },
      { name: 'Веган бургер', img: '/burgers/веган бургер.png', price: 250 },
      { name: 'Кантри бургер', img: '/burgers/кантри бургер.png', price: 310 },
      { name: 'МС бургер', img: '/burgers/мс бургер.png', price: 310 },
      { name: 'Пеперони бургер с халапеньо', img: '/burgers/пеперони бургер с халапеньо.png', price: 310 },
      { name: 'Свит чили бургер', img: '/burgers/свит чили чикен с говяжим беконом.png', price: 290 },
      { name: 'Сырный бро', img: '/burgers/сырный бро.png', price: 330 },
      { name: 'Спайс бургер', img: '/burgers/спайс бургер.png', price: 350 },
      { name: 'Биг чикен бургер', img: '/burgers/биг чикен бургер.png', price: 300 },
      { name: 'Биг чизбургер', img: '/burgers/биг чизбургер.png', price: 310 },
      { name: 'Сквид бургер', img: '/burgers/сквид бургер.png', price: 450 },
      { name: 'Моцарелла бургер', img: '/burgers/моцарелла бургер.png', price: 290 },
      { name: 'аЛУКсон', img: '/burgers/аЛУКсон.png', price: 350 },
      { name: 'ЕКХ бургер (фирменный)', img: '/burgers/ЕКХ бургер.png', price: 350 },
      { name: 'Биг тейсти', img: '/burgers/Биг тейсти.png', price: 450 },
      { name: 'Дабл биг чизбургер', img: '/burgers/дабл биг чизбургер.png', price: 430 },
      { name: 'Роял бургер', img: '/burgers/роял бургер.png', price: 450 },
      { name: 'Мит ролл', img: '/burgers/мит ролл.png', price: 270 },
      { name: 'Чикен ролл', img: '/burgers/чикен ролл.png', price: 270 },
      { name: 'Фиш ролл', img: '/burgers/фиш ролл.png', price: 280 },
      { name: 'Ролл с креветкой', img: '/burgers/ролл с креветкой.png', price: 330 },
      { name: 'Атлантик микс', img: '/burgers/Атлантик микс.png', price: 450 },
    ],
  },
  {
    title: "СНЕKИ",
    products: [
      { name: 'Фри мини', img: '/snacks/картофель фри мини.png', price: 110 },
      { name: 'Фри средняя', img: '/snacks/картофель фри средний.png', price: 140 },
      { name: 'Фри макси', img: '/snacks/картофель фри макси.png', price: 170 },
      { name: 'Батат', img: '/snacks/батат.png', price: 155 },
      { name: 'Картофель по-деревенски', img: '/snacks/картофель по-деревенски средний.png', price: 160 },
      { name: 'Картофель чуррос', img: '/snacks/картофель чуррос.png', price: 150 },
      { name: 'Роял фри с беконом', img: '/snacks/роял-фри.png', price: 220 },
      { name: 'Картофельный хашбраун 2 шт', img: '/snacks/картофельный хашбраун.png', price: 155 },
      { name: 'Наггетсы куриные 6 шт', img: '/snacks/наггетсы куриные.png', price: 170 },
      { name: 'Наггетсы куриные 9 шт', img: '/snacks/наггетсы куриные.png', price: 220 },
      { name: 'Куриные крылышки в соусе барбекю 6 шт', img: '/snacks/куриные крылышки.png', price: 299 },
      { name: 'Куриные крылышки в соусе барбекю 9 шт', img: '/snacks/куриные крылышки.png', price: 399 },
      { name: 'Куриные крылышки в соусе терияки 6 шт', img: '/snacks/куриные крылышки.png', price: 299 },
      { name: 'Куриные крылышки в соусе терияки 9 шт', img: '/snacks/куриные крылышки.png', price: 399 },
      { name: 'Стрипсы куриные 4 шт', img: '/snacks/стрипсы куриные.png', price: 300 },
      { name: 'Сырные кольца 5 шт', img: '/snacks/сырные кольца.png', price: 295 },
      { name: 'Сырные палочки (моцарелла) 5 шт', img: '/snacks/сырные палочки.png', price: 260 },
      { name: 'Сырные медальоны с халапеньо 6 шт', img: '/snacks/сырные медальоны.png', price: 250 },
      { name: 'Луковые кольца 6 шт', img: '/snacks/луковые кольца.png', price: 110 },
      { name: 'Креветки в панировке 5 шт', img: '/snacks/креветки в панировке.png', price: 395 },
      { name: 'Наггетсы рыбные 6 шт', img: '/snacks/наггется рыбные.png', price: 190 },
      { name: 'Наггетсы рыбные 9 шт', img: '/snacks/наггется рыбные.png', price: 270 },
      { name: 'Кольца кальмаров 5 шт', img: '/snacks/кольца кальмаров.png', price: 280 },
      { name: 'Спринг роллы 4 шт', img: '/snacks/спринг роллы.png', price: 270 },
    ],
  },
  {
    title: "КОМБО",
    products: [
      { name: 'Чиз комбо', img: '/combos/чиз комбо.png', price: 430 },
      { name: 'Чикен комбо', img: '/combos/чикен комбо.png', price: 470 },
      { name: 'МС комбо', img: '/combos/мс комбо.png', price: 560 },
      { name: 'ЕКХ комбо', img: '/combos/екх комбо.png', price: 590 },
      { name: 'Happy baby (наггетсы)', img: '/combos/детский комбо 1.png', price: 420 },
      { name: 'Happy baby (гамбургер)', img: '/combos/детский комбо 2.png', price: 420 },
      { name: 'Happy baby (чикен бургер)', img: '/combos/детский комбо 3.png', price: 450 },
      { name: 'Баскет с крыльями острый 3 шт', img: '/combos/баскет с крыльями.png', price: 290 },
      { name: 'Баскет с крыльями острый 9 шт', img: '/combos/баскет с крыльями.png', price: 385 },
      { name: 'Баскет с крыльями барбекю 3 шт', img: '/combos/баскет с крыльями.png', price: 290 },
      { name: 'Баскет с крыльями барбекю 9 шт', img: '/combos/баскет с крыльями.png', price: 385 },
      { name: 'Рыбный микс', img: '/snacks/рыбный микс.png', price: 450 },
      { name: 'Сырный микс', img: '/snacks/сырный микс.png', price: 390 },
    ],
  },
  {
    title: "ДЕСЕРТЫ И НАПИТКИ",
    products: [
      { name: 'Лимонад 350 мл', img: '/desserts_drinks/лимонады.png', price: 200 },
      { name: 'Лимонад 500 мл', img: '/desserts_drinks/лимонады.png', price: 300 },
      { name: 'Лимонад с джус боллами 250 мл', img: '/desserts_drinks/лмонад с джус боллами.png', price: 250 },
      { name: 'Лимонад с джус боллами 350 мл', img: '/desserts_drinks/лмонад с джус боллами.png', price: 350 },
      { name: 'Флурри', img: '/desserts_drinks/флури.png', price: 200 },
      { name: 'Мороженое рожок', img: '/desserts_drinks/мороженое рожок мини.png', price: 150 },
      { name: 'Мороженое стаканчик', img: '/desserts_drinks/мороженое стаканчик.png', price: 150 },
      { name: 'Раф 250 мл', img: '/desserts_drinks/раф-фраппе.png', price: 180 },
      { name: 'Раф 350 мл', img: '/desserts_drinks/раф-фраппе.png', price: 230 },
      { name: 'Американо', img: '/desserts_drinks/кофе.png', price: 100 },
      { name: 'Латте', img: '/desserts_drinks/кофе.png', price: 200 },
      { name: 'Горячий шоколад', img: '/desserts_drinks/кофе.png', price: 170 },
      { name: 'Смузи на молоке', img: '/desserts_drinks/смузи.png', price: 200 },
      { name: 'Кола 0,3', img: '/desserts_drinks/пепси.png', price: 120 },
      { name: 'Кола 0,4', img: '/desserts_drinks/пепси.png', price: 130 },
      { name: 'Кола 0,5', img: '/desserts_drinks/пепси.png', price: 140 },
      { name: 'Миринда 0,3', img: '/desserts_drinks/миринда.png', price: 120 },
      { name: 'Миринда 0,4', img: '/desserts_drinks/миринда.png', price: 130 },
      { name: 'Миринда 0,5', img: '/desserts_drinks/миринда.png', price: 140 },
      { name: 'Спрайт 0,3', img: '/desserts_drinks/спрайт.png', price: 120 },
      { name: 'Спрайт 0,4', img: '/desserts_drinks/спрайт.png', price: 130 },
      { name: 'Спрайт 0,5', img: '/desserts_drinks/спрайт.png', price: 140 },
      { name: 'Мохито 0,3', img: '/desserts_drinks/мохито.png', price: 120 },
      { name: 'Мохито 0,4', img: '/desserts_drinks/мохито.png', price: 130 },
      { name: 'Мохито 0,5', img: '/desserts_drinks/мохито.png', price: 140 },
      { name: 'Пирожок вишня', img: '/desserts_drinks/пирожки.png', price: 110 },
      { name: 'Пирожок ягоды', img: '/desserts_drinks/пирожки.png', price: 110 },
      { name: 'Маффин ванильный', img: '/desserts_drinks/маффин ванильный.png', price: 120 },
      { name: 'Маффин шоколадный', img: '/desserts_drinks/маффин шоколадный.png', price: 120 },
    ],
  },
  {
    title: "СОУСЫ",
    products: [
      { name: "Сырный соус", img: '/sauces/сырный.png', price: 40 },
      { name: "Барбекю соус", img: '/sauces/барбекю.png', price: 40 },
      { name: 'Пармеджано', img: '/sauces/пармеджано.png', price: 40 },
      { name: 'Терияки', img: '/sauces/терияки.png', price: 40 },
      { name: 'Томатный', img: '/sauces/томатный.png', price: 40 },
      { name: 'Тысяча островов', img: '/sauces/1000 островов.png', price: 40 },
      { name: 'Сальса', img: '/sauces/сальса.png', price: 40 },
      { name: 'Свит чили', img: '/sauces/свит чили.png', price: 40 },
      { name: 'Кисло-сладкий', img: '/sauces/кисло-сладкий.png', price: 40 },
      { name: 'Брусничный', img: '/sauces/брусничный.png', price: 50 },
      { name: 'Чесночный', img: '/sauces/чесночный.png', price: 40 },
      { name: 'Горчичный', img: '/sauces/горчичный.png', price: 40 },
    ],
  },
];

export default function MenuPage() {
  // Получаем функции корзины
  const { addItem } = useCart();
  const bottomMenu = (
    <div className="fixed left-0 right-0 bottom-0 z-40 bg-black bg-opacity-90 py-4 border-t border-[#222] flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-8 mb-2">
        {['БУРГЕРЫ', 'СНЕKИ', 'КОМБО', 'ДЕСЕРТЫ И НАПИТКИ', 'СОУСЫ'].map((cat) => (
          <a
            key={cat}
            href={`#${cat}`}
            className="text-lg md:text-xl font-bold uppercase tracking-wide px-6 py-2 bg-black border-2 border-white text-white rounded-xl shadow button-main hover:bg-white hover:text-black transition-colors"
          >
            {cat}
          </a>
        ))}
      </div>
      <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">Вернуться на главную</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white py-16 px-4 font-montserrat pb-[120vh]">
      <h1 className="text-5xl font-black mb-12 text-center">МЕНЮ</h1>
      <div className="flex flex-col gap-20">
        {menu.map((section) => (
          <section key={section.title} id={section.title}>
            <Marquee text={section.title} />
            <div className="flex flex-wrap justify-center gap-12">
              {section.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-[#181818] rounded-3xl shadow-xl flex flex-col items-center p-8 relative group max-w-xs w-full mx-auto h-[420px] justify-between"
                >
                  <div className="w-full flex justify-center mb-6">
                    <Image
                      src={product.img ? product.img : '/no-image.png'}
                      alt={product.name}
                      width={340}
                      height={240}
                      className="rounded-2xl object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  <div className="w-full text-center flex flex-col flex-grow justify-between">
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-wide">{product.name}</h3>
                    <div className="text-2xl font-bold mb-4">{product.price} ₽</div>
                    <div className="flex-grow" />
                    <button
                      className="w-full py-3 rounded-xl bg-[#8EC63F] text-black text-xl font-black transition hover:bg-[#7DB535] active:scale-95 mt-auto"
                      onClick={() => addItem({ name: product.name, price: product.price, img: product.img })}
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Link
        href="/cart"
        className="fixed bottom-24 right-8 z-50 bg-[#8EC63F] rounded-full p-4 w-20 h-20 flex items-center justify-center hover:bg-[#7DB535] transition-colors animate-blink"
      >
        <Image
          src="/icons/cart.svg"
          alt="Корзина"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
      <div className="h-40" />
      {bottomMenu}
      <div className="mt-12 text-xl text-center w-full">
        <Link href="/" className="underline text-[#FF6B00] font-black px-8 py-3 bg-black border-2 border-white text-white rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">БУРГЕРЫ, СНЕКИ, КОМБО, ДЕТСКОЕ, ДЕСЕРТЫ И НАПИТКИ, СОУСЫ — ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
    </main>
  );
} 