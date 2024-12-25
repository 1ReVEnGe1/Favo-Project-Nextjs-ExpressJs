import Navbar from '@/components/Navbar'
// import '../globals.css'
import './contactUs.css'

export const metadata = {
  title: 'ارتباط با تشریفات عروسی فاوو ایونت',
  description: 'راه های ارتباط با تشریفات عروسی فاوو ایونت ، رزرو وقت برای عروسی در تشریفات فاوو ایونت',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir='rtl'>
        
        {children}
      </body>
    </html>
  )
}
