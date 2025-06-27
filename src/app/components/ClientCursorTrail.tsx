"use client";
import dynamic from "next/dynamic";

const CursorTrailEffect = dynamic(() => import("./CursorTrailEffect"), { ssr: false });

export default function ClientCursorTrail() {
  return <CursorTrailEffect />;
} 