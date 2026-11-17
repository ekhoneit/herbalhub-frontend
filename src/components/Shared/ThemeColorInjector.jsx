"use client";

import { useEffect } from "react";
import { useStoreSettings } from "@/lib/dataFetch";

export default function ThemeColorInjector() {
  const { storeSettings } = useStoreSettings();

  useEffect(() => {
    if (!storeSettings) return;

    const root = document.documentElement;

    // 1. Dynamic Primary Color
    if (storeSettings.primaryColor) {
      root.style.setProperty("--primary", storeSettings.primaryColor);
      root.style.setProperty("--color-primary", storeSettings.primaryColor);
    }

    // 2. Dynamic Secondary Color
    if (storeSettings.secondaryColor) {
      root.style.setProperty("--secound", storeSettings.secondaryColor);
      root.style.setProperty("--color-secound", storeSettings.secondaryColor);
      root.style.setProperty("--secondary", storeSettings.secondaryColor);
    }

    // 3. Dynamic Browser Tab Favicon
    if (storeSettings.favicon) {
      // Remove ALL existing favicon/icon links to prevent browser from using stale ones
      const existingIcons = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
      );
      existingIcons.forEach((el) => {
        if (!el.hasAttribute("data-dynamic-favicon")) {
        // el.remove() removed to prevent removeChild crash
        }
      });

      // Find or create dedicated theme favicon link
      let link = document.querySelector("link[data-dynamic-favicon='true']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.setAttribute("data-dynamic-favicon", "true");
        document.head.appendChild(link);
      }
      link.href = storeSettings.favicon;
    }

    // 4. Dynamic Google Tag Manager (GTM)
    const activeGtmId = storeSettings.gtmId?.trim() || process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KWBMNVPM';
    if (activeGtmId && !document.getElementById('dynamic-gtm-script')) {
      const gtmScript = document.createElement('script');
      gtmScript.id = 'dynamic-gtm-script';
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${activeGtmId}');`;
      document.head.appendChild(gtmScript);
    }
  }, [storeSettings]);

  return null;
}
