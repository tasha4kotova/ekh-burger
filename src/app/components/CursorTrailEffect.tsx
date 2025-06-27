"use client";
import { useEffect } from "react";

export default function CursorTrailEffect() {
  useEffect(() => {
    // --- JS-эффект следа за курсором ---
    let f: any, l: any, v: any, x: { x?: number; y?: number } = {}, w: any[] = [], E: any = {};
    E.friction = .5;
    E.trails = 20;
    E.size = 50;
    E.dampening = .25;
    E.tension = .98;
    // Цвета радуги: зелёный, оранжевый, жёлтый, красный и их оттенки
    const colors = [
      100, // зелёный
      30,  // оранжевый
      60,  // жёлтый
      0,   // красный
      120, // ярко-зелёный
      40,  // оранжево-жёлтый
      10,  // красно-оранжевый
      80,  // жёлто-зелёный
    ];
    function e(t: any) { this.init(t || {}); }
    function n(t: any) { this.init(t || {}); }
    function i(t: any) {
      document.removeEventListener("mousemove", i);
      document.removeEventListener("touchstart", i);
      document.addEventListener("mousemove", d);
      document.addEventListener("touchmove", d);
      document.addEventListener("touchstart", u);
      d(t);
      a();
      o();
    }
    function a() {
      w = [];
      for (let t = 0; t < E.trails; t++) w.push(new n({ spring: .45 + .025 * (t / E.trails), colorIndex: t % colors.length }));
    }
    function o() {
      if (f.running) {
        f.globalCompositeOperation = "source-over";
        f.fillStyle = "rgba(0,0,0,0.4)";
        f.fillRect(0, 0, f.canvas.width, f.canvas.height);
        f.globalCompositeOperation = "lighter";
        for (let e = 0; e < E.trails; e++) {
          let t = w[e];
          // Используем разные цвета для разных линий
          const hue = colors[t.colorIndex];
          f.strokeStyle = `hsla(${hue},90%,50%,0.35)`;
          f.lineWidth = 2;
          t.update();
          t.draw();
        }
        f.frame++;
        requestAnimationFrame(o);
      }
    }
    function s() {
      f.canvas.width = window.innerWidth;
      f.canvas.height = window.innerHeight;
    }
    function r() { if (!f.running) { f.running = !0; o(); } }
    function h() { f.running = !1; }
    function d(t: any) {
      if (t.touches) {
        x.x = t.touches[0].pageX;
        x.y = t.touches[0].pageY;
      } else {
        x.x = t.clientX;
        x.y = t.clientY;
      }
      t.preventDefault && t.preventDefault();
    }
    function u(t: any) {
      if (1 === t.touches.length) {
        x.x = t.touches[0].pageX;
        x.y = t.touches[0].pageY;
      }
    }
    e.prototype = {
      init: function (t: any) {
        this.phase = t.phase || 0;
        this.offset = t.offset || 0;
        this.frequency = t.frequency || .001;
        this.amplitude = t.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
      value: function () { return this.offset + Math.sin(this.phase) * this.amplitude; }
    };
    n.prototype = {
      init: function (e: any) {
        this.spring = e.spring + .1 * Math.random() - .05;
        this.friction = E.friction + .01 * Math.random() - .005;
        this.colorIndex = e.colorIndex;
        this.nodes = [];
        for (let i = 0; i < E.size; i++) {
          let n = { x: x.x || 0, y: x.y || 0, vx: 0, vy: 0 };
          this.nodes.push(n);
        }
      },
      update: function () {
        let t = this.spring, e = this.nodes[0];
        e.vx += ((x.x || 0) - e.x) * t;
        e.vy += ((x.y || 0) - e.y) * t;
        for (let i = 0, a = this.nodes.length; a > i; i++) {
          e = this.nodes[i];
          if (i > 0) {
            let n = this.nodes[i - 1];
            e.vx += (n.x - e.x) * t;
            e.vy += (n.y - e.y) * t;
            e.vx += n.vx * E.dampening;
            e.vy += n.vy * E.dampening;
          }
          e.vx *= this.friction;
          e.vy *= this.friction;
          e.x += e.vx;
          e.y += e.vy;
          t *= E.tension;
        }
      },
      draw: function () {
        let t, e, n = this.nodes[0].x, i = this.nodes[0].y;
        f.beginPath();
        f.moveTo(n, i);
        for (let a = 1, o = this.nodes.length - 2; o > a; a++) {
          t = this.nodes[a];
          e = this.nodes[a + 1];
          n = .5 * (t.x + e.x);
          i = .5 * (t.y + e.y);
          f.quadraticCurveTo(t.x, t.y, n, i);
        }
        const lastIndex = this.nodes.length - 1;
        t = this.nodes[lastIndex - 1];
        e = this.nodes[lastIndex];
        f.quadraticCurveTo(t.x, t.y, e.x, e.y);
        f.stroke();
        f.closePath();
      }
    };
    // --- Инициализация ---
    setTimeout(() => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
      if (!canvas) return;
      f = canvas.getContext("2d");
      f.running = !0;
      f.frame = 1;
      l = new e({ phase: 2 * Math.random() * Math.PI, amplitude: 85, frequency: .0015, offset: 285 });
      x.x = window.innerWidth / 2;
      x.y = window.innerHeight / 2;
      document.addEventListener("mousemove", i);
      document.addEventListener("touchstart", i);
      window.addEventListener("orientationchange", s);
      window.addEventListener("resize", s);
      window.addEventListener("focus", r);
      window.addEventListener("blur", h);
      s();
    }, 100);
    // --- Очистка ---
    return () => {
      document.removeEventListener("mousemove", i);
      document.removeEventListener("touchstart", i);
      window.removeEventListener("orientationchange", s);
      window.removeEventListener("resize", s);
      window.removeEventListener("focus", r);
      window.removeEventListener("blur", h);
    };
  }, []);
  return <canvas id="canvas" style={{ position: "fixed", zIndex: 0, top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none" }} />;
} 