"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => router.push("/page/home"));
  return (
    <div className="w-3/4 h-12">
      <h1>Cargando....</h1>
    </div>
  );
}
