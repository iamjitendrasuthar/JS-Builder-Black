"use client";
import { useEffect } from "react";

export default function ElfsightWhatsApp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-e054793e-906a-4c1e-bc3b-513162fa0c24"
      data-elfsight-app-lazy
    ></div>
  );
}
