"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    }
  };

  return (
    <button
      className="flex items-center gap-2 text-cinza-500 hover:text-dourado transition-colors"
      onClick={handleShare}
    >
      <Share2 className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Compartilhar</span>
    </button>
  );
}
