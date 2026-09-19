import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://osumio.com"),
  title: {
    default: "Osumio | Modern Digital Growth & Experience Agency",
    template: "%s | Osumio Digital Agency",
  },
  description:
    "Osumio is a premium digital agency engineering high-converting websites, data-driven SEO, Google Ads, and full-funnel customer acquisition systems for ambitious businesses globally.",
  keywords: [
    "Digital Marketing Agency",
    "SEO Agency",
    "Google Ads Management",
    "Web Design and Development",
    "WordPress Development",
    "E-commerce Development",
    "B2B Lead Generation",
    "Branding Agency",
  ],
  authors: [{ name: "Osumio Agency" }],
  creator: "Osumio",
  publisher: "Osumio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osumio.com",
    title: "Osumio | Modern Digital Growth & Experience Agency",
    description:
      "We build digital systems that turn customer attention into measurable revenue. Full-funnel digital marketing, custom Next.js web development, and high-intent SEO.",
    siteName: "Osumio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osumio | Modern Digital Growth & Experience Agency",
    description:
      "Digital experiences and performance growth systems for ambitious businesses worldwide.",
    creator: "@osumioagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Osumio Digital Agency",
    url: "https://osumio.com",
    description:
      "Full-service international digital marketing, web engineering, and brand strategy agency helping businesses acquire customers and scale online.",
    telephone: "+1-800-555-0199",
    areaServed: ["US", "CA", "GB", "AU", "Global"],
    serviceType: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Google Ads PPC",
      "Web Design & Development",
      "E-Commerce Development",
      "Lead Generation Systems",
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#E86034] selection:text-white">
        {children}
      </body>
    </html>
  );
}