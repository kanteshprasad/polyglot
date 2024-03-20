import "./globals.css";
import { Providers } from './providers.tsx'
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./theme";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Polyglot",
  deScription: "Code in Native Indian languages",
};

const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

export default function RootLayout({ children }) {



  return (
    <html   lang='en'>
      <head>
        <link rel="icon" src="/public/favicon.ico"></link>
       
        {trackingId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} strategy="beforeInteractive" />
          <Script id="ga-config">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${trackingId}');
            `}
          </Script>
        </>
      )}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <Analytics/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
