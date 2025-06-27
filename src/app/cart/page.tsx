"use client";
import { useCart } from "../components/CartContext";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function CartPage() {
  const { items, changeQuantity, removeItem, clearCart } = useCart();
  const [showOrder, setShowOrder] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Итоговая сумма товаров
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Расчёт стоимости доставки
  const delivery = total >= 1400 ? 0 : (items.length > 0 ? 250 : 0);
  const deliveryText = delivery === 0 ? 'БЕСПЛАТНО' : `${delivery} ₽`;
  const grandTotal = total + delivery;

  // Обработка изменения полей формы
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Имитация оплаты и отправка заказа в Telegram
  async function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    // Формируем текст заказа для Telegram
    const orderText =
      `НОВЫЙ ЗАКАЗ\n` +
      `Имя: ${form.name}\n` +
      `Телефон: ${form.phone}\n` +
      `Адрес: ${form.address}\n` +
      `\nСостав заказа:\n` +
      items.map(i => `• ${i.name} x${i.quantity} — ${i.price * i.quantity}₽`).join("\n") +
      `\n\nСумма: ${total}₽` +
      `\nДоставка: ${delivery === 0 ? 'БЕСПЛАТНО' : delivery + '₽'}` +
      `\nИтого: ${grandTotal}₽` +
      `\n\nСтатус: ОПЛАЧЕНО`;
    // Отправка в Telegram
    await fetch(`https://api.telegram.org/bot7889085181:AAF8tpEwYjS_s4SBqwLpqN8SehpL0hgW6Vw/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 1065335874,
        text: orderText,
        parse_mode: "HTML"
      })
    });
    setIsLoading(false);
    setOrderSent(true);
    clearCart();
  }

  return (
    <div className="p-8 font-montserrat text-2xl text-center min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-black mb-8 text-[#8EC63F]">Корзина</h1>
      {items.length === 0 ? (
        <p className="mb-8">Ваша корзина пуста.</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-[#181818] rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-6">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl object-contain"
                />
                <div className="text-left">
                  <div className="font-black text-2xl">{item.name}</div>
                  <div className="text-xl text-[#8EC63F]">{item.price} ₽</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="px-4 py-2 bg-[#FF6B00] text-white rounded-full text-2xl font-black"
                  onClick={() => changeQuantity(item.name, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="font-black text-2xl">{item.quantity}</span>
                <button
                  className="px-4 py-2 bg-[#8EC63F] text-black rounded-full text-2xl font-black"
                  onClick={() => changeQuantity(item.name, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full text-xl font-black"
                  onClick={() => removeItem(item.name)}
                  title="Удалить"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <div className="text-2xl font-black mt-8 flex flex-col gap-2 items-end">
            <div>
              Сумма товаров: <span className="text-[#8EC63F]">{total} ₽</span>
            </div>
            <div>
              Доставка: <span className={delivery === 0 ? 'text-[#8EC63F]' : 'text-[#FF6B00]'}>{deliveryText}</span>
            </div>
            <div className="text-3xl mt-2">
              Итого: <span className="text-[#8EC63F]">{grandTotal} ₽</span>
            </div>
          </div>
          <button
            className="mt-8 px-12 py-5 bg-[#8EC63F] text-black text-2xl font-black rounded-full shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
            onClick={() => setShowOrder(true)}
          >
            Оформить заказ
          </button>
          <button
            className="mt-8 px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main"
            onClick={clearCart}
          >
            Очистить корзину
          </button>
          {/* Здесь будет кнопка оформления заказа */}
        </div>
      )}
      <div className="mt-16 flex justify-center">
        <Link
          href="/"
          className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main"
        >
          ВЕРНУТЬСЯ НА ГЛАВНУЮ
        </Link>
      </div>
      {/* Модальное окно оформления заказа */}
      {showOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#181818] rounded-3xl p-12 w-full max-w-2xl min-h-[420px] relative flex flex-col items-center shadow-2xl">
            <button
              onClick={() => { setShowOrder(false); setOrderSent(false); }}
              className="absolute top-6 right-8 text-4xl bg-black border-2 border-white text-white font-bold rounded-full w-14 h-14 flex items-center justify-center hover:bg-white hover:text-black transition-colors button-main"
            >
              ×
            </button>
            {!orderSent ? (
              <form onSubmit={handleOrder} className="flex flex-col gap-8 w-full items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full px-12 py-6 bg-[#232323] text-white text-3xl font-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8EC63F]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full px-12 py-6 bg-[#232323] text-white text-3xl font-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8EC63F]"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес доставки"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full px-12 py-6 bg-[#232323] text-white text-3xl font-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8EC63F]"
                />
                <button
                  type="submit"
                  className="w-full mt-2 px-12 py-6 bg-[#f5f0ea] text-black font-black rounded-full text-3xl shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? 'Оплата...' : 'Оплатить'}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-black text-[#8EC63F]">Спасибо!</span>
                <span className="text-2xl text-white mt-2">Ваш заказ оплачен и отправлен курьеру.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}