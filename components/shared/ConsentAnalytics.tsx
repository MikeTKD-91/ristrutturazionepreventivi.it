"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-5QY55JQCQP";
const DISABLE_KEY = `ga-disable-${MEASUREMENT_ID}`;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentAnalytics({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) {
      window[DISABLE_KEY as keyof Window] = true as never;
      return;
    }

    window[DISABLE_KEY as keyof Window] = false as never;
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    return () => {
      window[DISABLE_KEY as keyof Window] = true as never;
    };
  }, [enabled]);

  return null;
}
