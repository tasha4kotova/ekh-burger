import Link from 'next/link';

export default function MasterclassesPage() {
  return (
    <div className="p-8 font-montserrat">
      <h1 className="text-5xl font-black mb-8 text-[#8EC63F] text-center">Мастер-классы</h1>
      <p className="mb-8 text-2xl text-center">Участвуйте в наших кулинарных мастер-классах! Научитесь готовить фирменные бургеры и другие блюда вместе с нашими шеф-поварами.</p>
      <div className="mb-8 flex flex-col items-center gap-8">
        <video
          src="/video/IMG_0890.mp4"
          controls
          autoPlay
          muted
          className="rounded-2xl w-full max-w-2xl h-96 bg-black"
        >
          Ваш браузер не поддерживает видео.
        </video>
        <video
          src="/video/IMG_7980.mp4"
          controls
          autoPlay
          muted
          className="rounded-2xl w-full max-w-2xl h-96 bg-black"
        >
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <h2 className="text-2xl font-black mb-4 text-[#FF6B00] text-center">Ближайшие мастер-классы:</h2>
      <ul className="list-disc pl-6 mb-8 text-xl text-center flex flex-col items-center">
        <li>15 июня — "Идеальный бургер" (12:00)</li>
        <li>22 июня — "Секреты соусов" (14:00)</li>
        <li>29 июня — "Детский мастер-класс: мини-бургеры" (11:00)</li>
      </ul>
      <p className="text-xl text-center mb-8">Записаться можно по телефону или через форму на сайте.</p>
      <div className="mt-8 text-2xl font-black text-center text-[#8EC63F]">Спасибо, что выбрали ЕКХ!</div>
      <div className="mt-16 flex justify-center">
        <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
    </div>
  );
} 