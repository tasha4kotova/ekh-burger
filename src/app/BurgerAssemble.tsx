"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const layers = [
  {
    src: "/burger-layers/top-bun.png",
    alt: "Верхняя булочка",
    width: 500,
    height: 160,
    top: -30,
    left: 0,
    z: 20,
  },
  {
    src: "/burger-layers/bacon.png",
    alt: "Бекон",
    width: 420,
    height: 80,
    top: 150,
    left: 40,
    z: 19,
  },
  {
    src: "/burger-layers/lettuce.png",
    alt: "Салат",
    width: 470,
    height: 120,
    top: 230,
    left: 15,
    z: 18,
  },
  {
    src: "/burger-layers/tomato1.png",
    alt: "Томат 1",
    width: 220,
    height: 60,
    top: 340,
    left: 60,
    z: 17,
  },
  {
    src: "/burger-layers/tomato2.png",
    alt: "Томат 2",
    width: 220,
    height: 60,
    top: 390,
    left: 180,
    z: 16,
  },
  {
    src: "/burger-layers/cheese.png",
    alt: "Сыр",
    width: 440,
    height: 90,
    top: 450,
    left: 30,
    z: 15,
  },
  {
    src: "/burger-layers/patty.png",
    alt: "Котлета",
    width: 420,
    height: 110,
    top: 540,
    left: 40,
    z: 14,
  },
  {
    src: "/burger-layers/sauce.png",
    alt: "Горчица",
    width: 500,
    height: 80,
    top: 680,
    left: 0,
    z: 13,
  },
  // Огурцы в ряд
  {
    src: "/burger-layers/pickle1.png",
    alt: "Огурец 1",
    width: 70,
    height: 35,
    top: 720,
    left: 80,
    z: 12,
  },
  {
    src: "/burger-layers/pickle2.png",
    alt: "Огурец 2",
    width: 70,
    height: 35,
    top: 725,
    left: 160,
    z: 12,
  },
  {
    src: "/burger-layers/pickle3.png",
    alt: "Огурец 3",
    width: 70,
    height: 35,
    top: 730,
    left: 240,
    z: 12,
  },
  {
    src: "/burger-layers/pickle4.png",
    alt: "Огурец 4",
    width: 70,
    height: 35,
    top: 735,
    left: 320,
    z: 12,
  },
  // Лук в ряд, разного размера
  {
    src: "/burger-layers/onion1.png",
    alt: "Лук 1",
    width: 90,
    height: 50,
    top: 780,
    left: 120,
    z: 11,
  },
  {
    src: "/burger-layers/onion2.png",
    alt: "Лук 2",
    width: 70,
    height: 40,
    top: 790,
    left: 210,
    z: 11,
  },
  {
    src: "/burger-layers/onion3.png",
    alt: "Лук 3",
    width: 50,
    height: 30,
    top: 800,
    left: 300,
    z: 11,
  },
  {
    src: "/burger-layers/bottom-bun.png",
    alt: "Нижняя булочка",
    width: 500,
    height: 120,
    top: 850,
    left: 0,
    z: 10,
  },
];

export default function BurgerAssemble() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="relative w-[500px] h-[750px]">
      {layers.map((layer, index) => (
        <div
          key={layer.alt}
          className={`absolute transition-all duration-500 ease-out ${show ? "opacity-100" : "opacity-0"}`}
          style={{
            top: layer.top,
            left: layer.left,
            width: layer.width,
            height: layer.height,
            zIndex: layer.z,
            transitionDelay: `${index * 120}ms`,
          }}
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            width={layer.width}
            height={layer.height}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      ))}
      {/* Логотип на верхней булке */}
      <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 21, width: 160, height: 80 }}>
        <Image
          src="/logo/лого большое.png"
          alt="ЕКХ Бургер Логотип"
          width={160}
          height={80}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 