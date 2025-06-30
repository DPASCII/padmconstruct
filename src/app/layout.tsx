import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeRegistry } from '../theme';
import Header from '../components/header';
import { FooterLayout } from '../components/footer';
import BottomContent from '../components/footer/components/bottom-content';
import ContentList from '../components/footer/components/content-list';

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
        <div className="site">
          <StyledComponentsRegistry>
            <ThemeRegistry>
              <Header
                logo="/assets/PADM Logo.png"
                height={80}
                pages={[
                  { item: 'Home', link: '/' },
                  { item: 'Our Projects', link: '/projects' },
                ]}
              />
              {children}
              <FooterLayout
                children={
                  <ContentList
                    title="Contact Us"
                    itemlist={[
                      {
                        item: 'Address:',
                        subitem:
                          '66 Istanbul Street, BF Midwest, BF Homes, Parañaque City',
                      },
                      {
                        item: 'Phone:',
                        subitem: '09171841267',
                        link: 'tel:+639171841267',
                      },
                      {
                        item: 'Email:',
                        subitem: 'padmconstruct@gmail.com',
                        link: 'mailto:padmconstruct@gmail.com',
                      },
                    ]}
                  />
                }
                bottomContent={
                  <BottomContent
                    companyName="PADMConstruct"
                    smallLogo="/assets/small PADM.png"
                    mailTo="padmconstruct@gmail.com"
                  />
                }
              />
            </ThemeRegistry>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
