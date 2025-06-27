import Link from 'next/link';

export default function DeliveryPage() {
  return (
    <div className="p-8 font-montserrat text-2xl text-center">
      <h1 className="text-3xl font-black mb-4 text-[#8EC63F]">Доставка</h1>
      <p className="mb-4">Мы осуществляем доставку по всему городу Алушта.</p>
      <h2 className="text-xl font-black mb-2 text-[#FF6B00]">Время работы доставки:</h2>
      <ul className="mb-4 list-disc pl-6">
        <li>Летнее время: с 10:00 до 21:45 (ежедневно)</li>
        <li>Зимнее время: с 10:00 до 20:45 (ежедневно)</li>
      </ul>
      <h2 className="text-xl font-black mb-2 text-[#FF6B00]">Контакты для заказа:</h2>
      <ul className="mb-4 list-disc pl-6">
        <li>+7 (978) 507-70-00</li>
        <li>+7 (989) 503-70-00</li>
      </ul>
      <h2 className="text-xl font-black mb-2 text-[#FF6B00]">Минимальная сумма заказа</h2>
      <p className="mb-4">Минимальная сумма заказа для доставки — <span className="text-[#8EC63F] font-black">1000 рублей</span> (по малой Алуште).</p>
      <p className="mb-4">В населённые пункты: Рыбачий стан, кооператив Дельфин, Эврика, курортный клуб Дачи, улица Набережная (Профессорский уголок) доставка 350 рублей при заказе до 1700 рублей.</p>
      <h2 className="text-xl font-black mb-2 text-[#FF6B00]">Стоимость доставки</h2>
      <ul className="mb-4 list-disc pl-6">
        <li><span className="text-[#8EC63F] font-black">БЕСПЛАТНАЯ</span> доставка при заказе от 1400 рублей в пределах Малой Алушты.</li>
        <li>Доставка 250 рублей при заказе до 1400.</li>
        <li>В населённые пункты: курортный клуб Дачи, Рыбачий Стан, кооператив Дельфин, Эврика, улица Набережная доставка 300/350 рублей (Профессорский уголок) при заказе до 1700.</li>
        <li>От 1700 доставка <span className="text-[#8EC63F] font-black">БЕСПЛАТНАЯ</span>.</li>
        <li className="text-[#FF6B00]">В близлежащие населённые пункты (Лучистое, Изобильное, Малый Маяк и т.д.) доставка НЕ осуществляется!</li>
      </ul>
      <div className="mt-8 text-2xl font-black text-center text-[#8EC63F]">Спасибо, что выбрали ЕКХ!</div>
      <div className="mt-16 flex justify-center">
        <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
    </div>
  );
} 