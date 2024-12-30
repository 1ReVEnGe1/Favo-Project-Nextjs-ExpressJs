import Navbar from '@/components/Navbar'
// import '../globals.css'
import './contactUs.css'

export const metadata = {
  title: 'ارتباط با تشریفات عروسی فاوو ایونت',
  description: 'راه های ارتباط با تشریفات عروسی فاوو ایونت ، رزرو وقت برای عروسی در تشریفات فاوو ایونت',
}

export default function RootLayout({ children }) {
  const blockCrawlers = process.env.NEXT_PUBLIC_BLOCK_CRAWLERS === "true";

  return (
    <html lang="fa">
      <head>
        {blockCrawlers && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <meta name="theme-color" content="#1E1E1E" />
      </head>
      <body dir='rtl'>

        {children}
      </body>
    </html>
  )
}
