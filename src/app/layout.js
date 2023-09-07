import GlobalCSS from './glogalStyle';
import StyledJsxRegistry from './registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GlobalCSS />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
