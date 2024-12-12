

import FixedSticker from "../components/FixedSticker";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";



export const metadata = {
  title: "تشریفات عروسی فاووایونت 💖",
  description: "تشریفات عروسی فاوو ایونت  برگزارکننده لوکس ترین مراسم های عروسی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        {/* <link rel="icon" href="/images/favicons/لوگو فاوو ایونت.webp" type="image/webp" sizes="any" /> */}
        {/* <link rel="icon" href="/logo favoevent.png" type="image/png" /> */}
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta name="theme-color" content="#1E1E1E" />
      </head>

      <body dir="rtl">
        <Navbar />
        <FixedSticker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
