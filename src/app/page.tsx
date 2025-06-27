"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  // Для параллакса на мышь
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Обработчик движения мыши для параллакса
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30; // max 15px влево/вправо
    const y = ((e.clientY - top) / height - 0.5) * 30; // max 15px вверх/вниз
    setOffset({ x, y });
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden font-montserrat">
      {/* Горизонтальное меню сверху */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 flex items-center justify-center py-4 px-2 border-b border-[#222]">
        <div className="hidden md:flex gap-8">
          <Link href="/menu" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">МЕНЮ</Link>
          <Link href="/delivery" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">ДОСТАВКА</Link>
          <Link href="/contacts" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">КОНТАКТЫ</Link>
          <Link href="/masterclasses" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">МАСТЕР-КЛАССЫ</Link>
          <Link href="/novinki" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">НОВИНКИ</Link>
          <Link href="/promo" className="text-[#FF6B00] text-lg font-black hover:text-[#8EC63F] transition-colors">АКЦИИ</Link>
        </div>
        {/* Mobile burger menu */}
        <div className="md:hidden w-full flex justify-between items-center">
          <Link href="/menu" className="text-[#FF6B00] text-lg font-black">МЕНЮ</Link>
          <button className="text-[#FF6B00] text-4xl font-black focus:outline-none">&#9776;</button>
        </div>
      </nav>
      <div className="h-20 md:h-24" />
      {/* Центральный блок с параллаксом */}
      <div
        className="relative w-full h-screen flex items-center justify-center select-none overflow-hidden"
        style={{ cursor: "pointer" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      >
        {/* Картинка с параллаксом на весь экран */}
        <Image
          src="/burger-parallax.jpg"
          alt="Параллакс бургер"
          fill
          style={{
            objectFit: "cover",
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            transition: "transform 0.2s cubic-bezier(.4,2,.3,1)",
            zIndex: 1,
          }}
          className="absolute inset-0 w-full h-full drop-shadow-2xl"
          priority
        />
        {/* Логотип по центру поверх */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <Image
            src="/logo/лого большое.png"
            alt="ЕКХ Бургер Логотип"
            width={220}
            height={120}
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Кнопка корзины */}
      <Link
        href="/cart"
        className="fixed bottom-8 right-8 z-50 bg-[#8EC63F] rounded-full p-4 w-20 h-20 flex items-center justify-center hover:bg-[#7DB535] transition-colors"
      >
        <Image
          src="/icons/cart.svg"
          alt="Корзина"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
    </main>
  );
}
