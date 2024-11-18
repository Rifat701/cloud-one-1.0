import { Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BootstrapClient from './components/BootstrapClient';
import Header from './components/Header';
import Footer from './components/Footer';
import LenisProvider from './components/LenisProvider';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Assistify',
    template: '%s | Assistify',
  },
  description: 'AI Startup and Technology Template',
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
  ],
  openGraph: {
    title: 'Assistify',
    description: 'AI Startup and Technology Template',
    siteName: 'Assistify',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <BootstrapClient />
        </LenisProvider>
      </body>
    </html>
  );
}
