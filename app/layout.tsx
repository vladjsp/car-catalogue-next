import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Авторент',
  description: 'Сервіс оренди авто з сучасним підходом до ведення бізнесу.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
