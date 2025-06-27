import Link from 'next/link';

export default function NovinkiPage() {
  return (
    <div className="p-8 font-montserrat text-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">Новинки</h1>
      <p className="mb-6">Попробуйте наши новые блюда! Мы постоянно обновляем меню, чтобы радовать вас свежими вкусами.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Бургер "Сырный бро"</li>
        <li>Смузи на молоке</li>
        <li>Картофель чуррос</li>
        <li>Маффин шоколадный</li>
      </ul>
      <Link href="/menu" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-xl text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">Посмотреть всё меню</Link>
      <div className="mt-16 flex justify-center">
        <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
    </div>
  );
} 