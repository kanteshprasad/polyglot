'use client'
import React from 'react'
import { ChakraProvider, DarkMode} from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import theme from "../app/theme"
import { ColorModeScript } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <React.StrictMode>
    <CacheProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <ChakraProvider >{children}</ChakraProvider> 
     </CacheProvider>
     </React.StrictMode>
     
}