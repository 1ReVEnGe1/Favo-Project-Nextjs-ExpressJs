
import "../globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head> 
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content="#1E1E1E" />
      </head>

      <body dir="rtl">

        {children}

      </body>
    </html>
  );
}
