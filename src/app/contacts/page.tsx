'use client';
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

export default function ContactsPage() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 2000);
  }

  return (
    <div className="p-8 font-montserrat text-2xl text-center min-h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-5xl font-black mb-8 text-[#8EC63F] text-center">Контакты</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-black mb-2 text-[#FF6B00] text-center">Адрес 1</h2>
        <p>Крым, г. Алушта, переулок Ревкомовский, 4</p>
        <p className="font-black text-[#8EC63F]">+7 (978) 507-70-00</p>
        <p>График работы: <span className="font-black">Зимнее время:</span> с 10.00 до 21.00, <span className="font-black">Летнее время:</span> 10.00-22.00</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-black mb-2 text-[#FF6B00] text-center">Адрес 2</h2>
        <p>Крым, г. Алушта, Горького 6</p>
        <p className="font-black text-[#8EC63F]">+7 (989) 503-70-00</p>
        <p>График работы: 10.00-23.00</p>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white hover:text-black transition-colors shadow-lg button-main"
      >
        Оставить отзыв
      </button>
      <div className="mt-8 text-2xl font-black text-center text-[#8EC63F]">Спасибо, что выбрали ЕКХ!</div>
      <div className="mt-16 flex justify-center">
        <Link href="/" className="px-8 py-3 bg-black border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-black transition-colors button-main">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#181818] rounded-3xl p-12 w-full max-w-2xl min-h-[520px] relative flex flex-col items-center shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-8 text-5xl text-[#FF6B00] font-black"
            >×</button>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full items-center">
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
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full px-12 py-6 bg-[#232323] text-white text-3xl font-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8EC63F]"
                />
                <textarea
                  name="message"
                  placeholder="Отзыв"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl px-12 py-8 bg-[#232323] text-white text-3xl font-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8EC63F] min-h-[180px]"
                />
                <button
                  type="submit"
                  className="w-full mt-2 px-12 py-6 bg-[#f5f0ea] text-black font-black rounded-full text-3xl shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                >
                  ОТПРАВИТЬ
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-black text-[#8EC63F]">Спасибо!</span>
                <span className="text-2xl text-white mt-2">Ваш отзыв принят.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 