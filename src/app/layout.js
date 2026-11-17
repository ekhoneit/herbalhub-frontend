import { Inter, Manrope, Hind_Siliguri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import Script from "next/script";
import PageTracker from "@/components/Analytics/PageTracker";
import { CartDrawerProvider } from "@/context/CartDrawerContext";
import FloatingCart from "@/components/Cart/FloatingCart";
// import AiAssistantWidget from "@/components/AiAssistant/AiAssistantWidget";
// import WelcomeAudioPlayer from "@/components/AiAssistant/WelcomeAudioPlayer";
import PromotionalPopup from "@/components/Shared/PromotionalPopup";
import ThemeColorInjector from "@/components/Shared/ThemeColorInjector";
import ScrollToTop from "@/components/Shared/ScrollToTop";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KWBMNVPM';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.herbalhub.com';

export async function generateMetadata() {
  let faviconUrl = "/herbalhub-favicon.png";
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/api/store-settings`, { next: { revalidate: 30 } });
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.favicon) {
        faviconUrl = data.data.favicon;
      }
    }
  } catch (e) {
    // fallback to /herbalhub.png
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Herbalhub | Authentic Online Shopping in Bangladesh",
      template: "%s | Herbalhub",
    },
    description: "Herbalhub is the best online shopping destination in Bangladesh. Shop 100% authentic electronics, fashion, lifestyle products, home essentials & accessories at the best prices with cash on delivery and fast nationwide delivery.",
    keywords: [
      "herbalhub",
      "herbalhub bd",
      "herbalhub.xyz",
      "herbalhub online shop",
      "Herbalhub - Best Online Shopping Experience",
      "online shopping bangladesh",
      "best online shopping site",
      "buy online bangladesh",
      "authentic products bangladesh",
      "electronics online shopping bd",
      "fashion online shop bd",
      "cash on delivery bangladesh",
      "fast delivery online shop bd",
    ],
    authors: [{ name: "Herbalhub", url: SITE_URL }],
    creator: "Herbalhub",
    publisher: "Herbalhub",
    alternates: {
      canonical: SITE_URL,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_BD",
      url: SITE_URL,
      siteName: "Herbalhub",
      title: "Herbalhub | Authentic Online Shopping in Bangladesh",
      description: "Discover genuine electronics, fashion, and lifestyle products with express delivery nationwide across Bangladesh.",
      images: [
        {
          url: "/herbalhub.png",
          width: 1200,
          height: 630,
          alt: "Herbalhub - Best Online Shopping Experience",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Herbalhub | Authentic Online Shopping in Bangladesh",
      description: "Discover genuine electronics, fashion, and lifestyle products with express delivery nationwide across Bangladesh.",
      images: ["/herbalhub.png"],
    },
    icons: {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
  };
}

export default async function RootLayout({ children }) {
  let dynamicGtmId = GTM_ID;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/api/store-settings`, { next: { revalidate: 30 } });
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.gtmId?.trim()) {
        dynamicGtmId = data.data.gtmId.trim();
      }
    }
  } catch (_) {}
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Herbalhub | Authentic Online Shopping in Bangladesh",
        "description": "Herbalhub is Bangladesh's top e-commerce platform offering 100% authentic products with fast delivery nationwide.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Herbalhub",
        "url": SITE_URL,
        "logo": `${SITE_URL}/herbalhub.png`,
        "sameAs": [
          "https://www.facebook.com/herbalhubecommerce",
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} ${manrope.variable} ${hindSiliguri.variable} antialiased min-h-screen flex flex-col bg-white text-slate-800`}>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${dynamicGtmId}');`,
          }}
        />
        <script id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${dynamicGtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PageTracker />
        <ThemeColorInjector />
        <CartDrawerProvider>
          {children}
          <FloatingCart />
          {/* <WelcomeAudioPlayer /> */}
          {/* <AiAssistantWidget /> */}
          <PromotionalPopup />
          <ScrollToTop />
        </CartDrawerProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
