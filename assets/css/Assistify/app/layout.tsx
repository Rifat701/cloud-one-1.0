'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
