import { Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BootstrapClient from './components/BootstrapClient';

const manrope = Manrope({ subsets: ['latin'] });

export default function NotFoundLayout({ children }) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
