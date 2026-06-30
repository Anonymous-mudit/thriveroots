"use client";

import { useRef, useState, DragEvent } from "react";
import { UploadCloud, X, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUploadQuestion({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  if (value) {
    return (
      <div className="relative w-full max-w-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={value} alt="Uploaded scalp photo preview" className="w-full aspect-square object-cover rounded-[var(--radius-lg)] border border-[var(--color-ink-100)]" />
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-[var(--color-ink-900)]/80 text-[var(--color-paper)] flex items-center justify-center backdrop-blur-sm"
          aria-label="Remove photo"
        >
          <X size={15} />
        </button>
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
      className={cn(
        "w-full max-w-xs aspect-square rounded-[var(--radius-lg)] border-2 border-dashed flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors",
        dragging ? "border-[var(--color-pine-500)] bg-[var(--color-pine-50)]" : "border-[var(--color-ink-100)] hover:border-[var(--color-pine-300)]"
      )}
    >
      <span className="h-12 w-12 rounded-full bg-[var(--color-pine-100)] flex items-center justify-center">
        {dragging ? <ImageIcon size={20} className="text-[var(--color-pine-700)]" /> : <UploadCloud size={20} className="text-[var(--color-pine-700)]" />}
      </span>
      <p className="text-sm font-medium text-[var(--color-ink-900)]">Drag a photo here, or click to upload</p>
      <p className="caption">JPG or PNG, up to 8MB</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
