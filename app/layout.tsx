import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeRegistry } from './theme';

export const metadata: Metadata = {
  title: 'PADM',
  description: 'PADM Construction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeRegistry>{children}</ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
