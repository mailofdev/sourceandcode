import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/ui/MeshBackground";
import config from "@/config/site.config";
import { Inter, Poppins } from "next/font/google";
import "@/themes/default.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: config.site.title,
  description: config.site.description,
  keywords: config.site.keywords,
  openGraph: {
    title: config.site.title,
    description: config.site.description,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: config.site.ogImage,
        width: 1024,
        height: 576,
        alt: `${config.site.name} — ${config.site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.site.description,
    images: [config.site.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-theme={config.theme} className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <MeshBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
          >
            Skip to content
          </a>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
