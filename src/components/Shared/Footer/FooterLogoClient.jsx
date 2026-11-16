"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreSettings } from "@/lib/dataFetch";

export default function FooterLogoClient({ initialSettings = null }) {
  const { storeSettings } = useStoreSettings(initialSettings);
  const settings = storeSettings || initialSettings;

  const logoSrc = settings?.footerLogo || settings?.logo || "/herbalhub.png";
  const hasBg = Boolean(settings?.footerLogoBg);

  return (
    <Link href="/" className="inline-block group mb-3">
      <div
        className={`relative transition-all ${
          hasBg
            ? "w-48 sm:w-60 h-16 sm:h-20 bg-white rounded-xl shadow-xs border border-white/20 flex items-center justify-center p-2"
            : "w-44 sm:w-52 h-14 sm:h-16 bg-white/95 backdrop-blur-xs rounded-xl px-4 py-2 flex items-center justify-center border border-white/10 shadow-sm"
        }`}
      >
        <Image
          src={logoSrc}
          alt={settings?.siteTitle || "Herbalhub"}
          fill
          priority={false}
          className="object-contain p-1.5 transition-transform duration-200 group-hover:scale-[1.03]"
        />
      </div>
    </Link>
  );
}
