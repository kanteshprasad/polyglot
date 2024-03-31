// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: {
      html: {
        bg: "#1a202c", // Set your desired background color here
      },
      body:{
        bg:"#1a202c",
      }
    },
  },
});

export default theme