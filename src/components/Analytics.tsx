"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth, trackSectionView, trackTimeOnPage } from "@/lib/analytics";

export default function Analytics() {
  const scrollMarksFired = useRef<Set<number>>(new Set());
  const sectionsSeen = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Scroll Depth Tracking
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const scrollPercent = Math.round(
        (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100
      );

      [25, 50, 75, 100].forEach((mark) => {
        if (scrollPercent >= mark && !scrollMarksFired.current.has(mark)) {
          scrollMarksFired.current.add(mark);
          trackScrollDepth(mark);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Time on Page Tracking
    const timeouts = [30, 60, 120, 300].map((seconds) =>
      setTimeout(() => trackTimeOnPage(seconds), seconds * 1000)
    );

    // Section View Tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || entry.target.className.split(" ")[0];
            if (sectionId && !sectionsSeen.current.has(sectionId)) {
              sectionsSeen.current.add(sectionId);
              trackSectionView(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timeouts.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return null;
}
