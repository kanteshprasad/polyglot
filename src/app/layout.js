import "./globals.css";
import { Providers } from './providers'


export const metadata = {
  title: "Polyglot",
  description: "Code in Multiple Human languages",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
