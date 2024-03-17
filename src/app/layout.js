import "./globals.css";
import { Providers } from './providers.tsx'
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./theme";

export const metadata = {
  title: "Polyglot",
  description: "Code in Native Indian languages",
};



export default function RootLayout({ children }) {
  return (
    <html   lang='en'>
      <head>
        <link rel="icon" src="/public/favicon.ico"></link>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
