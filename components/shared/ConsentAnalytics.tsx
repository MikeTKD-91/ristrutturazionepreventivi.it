"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-5QY55JQCQP";
const DISABLE_KEY = `ga-disable-${MEASUREMENT_ID}`;
const DENIED = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentAnalytics({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    window[DISABLE_KEY as keyof Window] = !enabled as never;
    if (!enabled) {
      window.gtag?.("consent", "update", DENIED);
      return;
    }

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
      window.gtag("consent", "default", DENIED);
      window.gtag("consent", "update", { ...DENIED, analytics_storage: "granted" });
      window.gtag("js", new Date());
      window.gtag("config", MEASUREMENT_ID);

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      document.head.appendChild(script);
    } else {
      window.gtag("consent", "update", { ...DENIED, analytics_storage: "granted" });
    }
  }, [enabled]);

  return null;
}
