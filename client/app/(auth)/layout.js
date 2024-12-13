


import "../globals.css";



export const metadata = {
  title: "تشریفات عروسی فاووایونت 💖",
  description: "تشریفات عروسی فاوو ایونت  برگزارکننده لوکس ترین مراسم های عروسی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
    
        <meta name="theme-color" content="#1E1E1E" />
      </head>

      <body dir="rtl">

        {children}

      </body>
    </html>
  );
}
