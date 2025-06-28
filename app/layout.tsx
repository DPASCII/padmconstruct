import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeRegistry } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <ThemeRegistry>
            <Header
              logo="/assets/PADM Logo.png"
              height={80}
              pages={[
                { item: 'Menu', link: '/' },
                { item: 'Our Projects', link: '/projects' },
              ]}
            />
            {children}
            <Footer
              socialsurl={['www.facebook.com']}
              companyName="PADMConstruct"
            />
          </ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
