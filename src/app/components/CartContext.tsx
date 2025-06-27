"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Тип одного товара в корзине
export type CartItem = {
  name: string;
  price: number;
  img: string;
  quantity: number;
};

// Тип контекста корзины
type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  changeQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
};

// Создаём контекст
const CartContext = createContext<CartContextType | undefined>(undefined);

// Провайдер корзины
export function CartProvider({ children }: { children: React.ReactNode }) {
  // Состояние корзины
  const [items, setItems] = useState<CartItem[]>([]);

  // Загружаем корзину из localStorage при первом рендере
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Добавить товар в корзину
  function addItem(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        // Если товар уже есть — увеличиваем количество
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Если товара нет — добавляем с quantity: 1
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  // Изменить количество товара
  function changeQuantity(name: string, quantity: number) {
    setItems((prev) =>
      prev.map((i) =>
        i.name === name ? { ...i, quantity: Math.max(1, quantity) } : i
      )
    );
  }

  // Удалить товар из корзины
  function removeItem(name: string) {
    setItems((prev) => prev.filter((i) => i.name !== name));
  }

  // Очистить корзину
  function clearCart() {
    setItems([]);
  }

  // Передаём значения и функции через контекст
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, changeQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Хук для использования корзины в компонентах
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart должен использоваться внутри <CartProvider>");
  return ctx;
} 