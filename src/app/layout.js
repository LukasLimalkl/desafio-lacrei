import { Nunito } from 'next/font/google';
import Head from 'next/head';
import GlobalCSS from './glogalStyle';
import StyledJsxRegistry from './registry';

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html className={nunito.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <GlobalCSS />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
