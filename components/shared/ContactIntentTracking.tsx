"use client";

import { useEffect } from "react";

type ConsentPreferences = { analytics?: boolean };

function hasAnalyticsConsent(): boolean {
  try {
    const preferences = JSON.parse(localStorage.getItem("cookieConsent") ?? "null") as ConsentPreferences | null;
    return preferences?.analytics === true;
  } catch {
    return false;
  }
}

export default function ContactIntentTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      let channel: "whatsapp" | "phone" | null = null;
      if (link.protocol === "tel:") channel = "phone";
      if (link.hostname === "wa.me" || link.hostname === "api.whatsapp.com") channel = "whatsapp";
      if (!channel || !hasAnalyticsConsent() || typeof window.gtag !== "function") return;

      window.gtag("event", "contact_intent", {
        contact_channel: channel,
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
