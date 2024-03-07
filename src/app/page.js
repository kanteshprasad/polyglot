'use client'
import CodeEditor from "./components/CodeEditor";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./theme";
import Navbar from "./components/Navbar.jsx"


export default function Home() {


  
  return (
    <>
<ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Navbar></Navbar>
    <CodeEditor> </CodeEditor>
    </>
  
  );
}
