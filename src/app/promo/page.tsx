import Link from 'next/link';

export default function PromoPage() {
  return (
    <div className="p-8 font-montserrat text-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">Акции</h1>
      <p className="mb-6">Следите за нашими специальными предложениями и акциями — выгодно и вкусно!</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Скидка 10% на первый заказ через сайт</li>
        <li>Бесплатная доставка при заказе от 1400₽</li>
        <li>Каждый 5-й бургер — в подарок!</li>
      </ul>
      <Link href="/menu" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-xl text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">Перейти к меню</Link>
      <div className="mt-16 flex justify-center">
        <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
    </div>
  );
} 