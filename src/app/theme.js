// 1. import `extendTheme` function
import { extendTheme  } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}


const theme = extendTheme(  
  {
  config,

  colors: {
    chakra: {
      "background": "#F1EF99", 
    },
  },
})



export default theme