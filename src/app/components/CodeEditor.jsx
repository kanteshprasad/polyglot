import React, { useRef, useState, useEffect } from "react";
import { Box, Spacer, Button, LightMode,DarkMode, VStack,Heading, Flex, Text, HStack, Center } from "@chakra-ui/react";
import { snippet } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import Editor from 'react-simple-code-editor';
import Prism from "prismjs";
import { highlight } from 'prismjs/components/prism-core';
import HorizontalSeparator from "./Seperator.jsx";

const CodeEditor = (language) => {
  const editorRef = useRef();
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState(" ");
  

  const handleChange = (newCode) => {
    setCode(newCode);
  };
  


  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClear = () => {
    setCode("");
  };


  useEffect(() => {
    setCode(snippet);
  }, [snippet]);
  

  const highlightindex = (input) =>
    highlight(input, Prism.languages.javascript, "javascript")
      .split("\n")
      .map((line, i) => `<span  class='indexline'>${i + 1}</span>${line}`)
      .join("\n");

     
      
      
      
      
  return (
    <Box id="playground" > 
    <Center>
       <Heading my={10}> Playground </Heading>
    
       </Center>
       <HorizontalSeparator/>
    
      <Flex mt={5} id="code-editor" width="80vw" mx="10vw" direction={{ base: "column", md: "row", lg: "row" }}  >  
     
      

        <Box width={{ base: "100%", md: "70%", lg: "70%" }} border={2} height="60vh" borderColor="black" position="relative">


    
         <HStack my={2} width="100%"  justifyContent="center"  >
         
          <CopyToClipboard text={code} onCopy={handleCopy}>
                <Button colorScheme="blue"  size="md" >
                  {copied ? 'Copied!' : <Text>Copy</Text>}
                </Button>
              </CopyToClipboard>

              <Button  colorScheme="red" onClick={handleClear}>
              <Text mx={1} >Clear</Text>  <FontAwesomeIcon icon={faTrash} /> 
              </Button>    

              </HStack>   
      
        
            
              <DarkMode>
           <Box  style={{ height: '80%', overflowY: 'auto', border:'1px solid grey' }} >
          
              
          <Editor
            id="editor"
            height="100%"
            width="100%"
            value={code}
            preClassName='editorpre'
            textareaClassName="editorArea"
            onValueChange={handleChange}
            highlight={(code) => highlightindex(code)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              overflow: 'auto',
            }} ref={editorRef}
          /> 
       
         </Box> 
         </DarkMode>
      
          
        </Box>
        <Spacer />
        <Box width={{ base: "100%", md: "30%", lg: "30%" }} p={3}  >
          <Output code={code} language='javascript' />
        </Box>
     
      </Flex>
    
    </Box>
  );
};

export default CodeEditor;
