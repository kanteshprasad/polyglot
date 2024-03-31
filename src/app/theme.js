// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: `'Reggae One", system-ui;'`,
    body: `'Protest Riot", sans-serif;'`,
  }
});

export default theme