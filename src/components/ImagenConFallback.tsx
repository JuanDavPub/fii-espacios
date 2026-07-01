"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function ImagenConFallback({
  src,
  alt,
  className,
  placeholder = "Imagen no disponible",
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) {
  const [fallo, setFallo] = useState(false);

  if (!src || fallo) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--text-muted)]">
        <Icon name="file" className="h-8 w-8" />
        <p className="text-sm font-medium">{placeholder}</p>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFallo(true)} />;
}
