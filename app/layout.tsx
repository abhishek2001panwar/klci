import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Karnataka Limpo Cement Industry (KLCI) | Iron Ore, Manganese Ore, Red Ochre Mining Karnataka",
  description: "Karnataka Limpo Cement Industry (KLCI) is a leading mining entity in Tumkur, Karnataka, India. Certified with ISO 14001:2015, 9001:2015 & 45001:2015, KLCI specializes in iron ore, manganese ore, and red ochre mining, maintaining high standards in environmental care, quality, and safety.",
  keywords: [
    "KLCI",
    "Karnataka Limpo Cement Industry",
    "Iron Ore Mining Karnataka",
    "Manganese Ore Mining Karnataka",
    "Red Ochre Mining Karnataka",
    "ISO 14001:2015",
    "ISO 9001:2015",
    "ISO 45001:2015",
    "Mining Tumkur",
    "Sustainable Mining India",
    "Environmental Management Mining",
    "Quality Mining India",
    "Occupational Health Safety Mining"
  ],
  openGraph: {
    title: "Karnataka Limpo Cement Industry (KLCI) | Iron Ore, Manganese Ore, Red Ochre Mining Karnataka",
    description: "KLCI is a certified mining company in Karnataka, India, specializing in iron ore, manganese ore, and red ochre. We are committed to environmental, quality, and safety standards.",
    url: "https://www.klci.in/",
    siteName: "Karnataka Limpo Cement Industry (KLCI)",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
        alt: "KLCI Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Karnataka Limpo Cement Industry (KLCI)",
    description: "Certified mining company in Karnataka, India. Iron ore, manganese ore, red ochre. ISO 14001:2015, 9001:2015 & 45001:2015.",
    site: "@klci_official"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
