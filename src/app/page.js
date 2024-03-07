'use client'
import CodeEditor from "./components/CodeEditor";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./theme";
import Togglemode from "./components/Togglemode"


export default function Home() {


  
  return (
    <>
<ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Togglemode></Togglemode>
    <CodeEditor> </CodeEditor>
    </>
  
  );
}
