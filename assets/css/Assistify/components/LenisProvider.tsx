'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { PropsWithChildren } from 'react';

export default function LenisProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
