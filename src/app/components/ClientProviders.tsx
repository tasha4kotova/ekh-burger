"use client";
import { CartProvider } from "./CartContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
} 