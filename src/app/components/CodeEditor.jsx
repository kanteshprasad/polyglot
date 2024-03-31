import React, { useRef, useState, useEffect } from "react";
import { Box, Spacer, Button, DarkMode, Heading, Flex, Text, HStack, Center } from "@chakra-ui/react";
import { CODE_SNIPPETS } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Editor from 'react-simple-code-editor';
import Prism from "prismjs";
import { highlight } from 'prismjs/components/prism-core';
import HorizontalSeparator from "./Seperator.jsx";

const CodeEditor = () => {
  const editorRef = useRef();
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState(" ");
  const [selectedlanguage, setLanguage] = useState("kannada");

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
    setCode(CODE_SNIPPETS[selectedlanguage.toLowerCase()]);
  }, [selectedlanguage]);
  
  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const highlightindex = (input) =>
    highlight(input, Prism.languages.javascript, "javascript")
      .split("\n")
      .map((line, i) => `<span  class='indexline'>${i + 1}</span>${line}`)
      .join("\n");

     
      
      
      
      
  return (
    <Box mt={10}  id="playground" > 
        <HorizontalSeparator/>
    <Center>
       <Heading color='tomato' my={5}> Playground </Heading>
    
       </Center>
       <HorizontalSeparator/>
       <Flex mt={5} justifyContent={'center'} width='100%' flexWrap="wrap">
        {['Kannada', 'Hindi', 'Punjabi', 'Telugu', 'Tamil', 'Odia'].map((language) => (
          <Button
            key={language}
            colorScheme={selectedlanguage === language ? 'red' : 'gray'}  
            onClick={() => handleLanguageChange(language)}
            mb={2}
            mr={2}
          >
            {language}
          </Button>
        ))}
      </Flex>
    
      <Flex mt={5} id="code-editor" width="80vw" mx="10vw" direction={{ base: "column", md: "row", lg: "row" }}  >  
        
  

        <Box mt={5} width={{ base: "100%", md: "70%", lg: "70%" }} border={2} height="60vh" borderColor="black" position="relative">

        

    
         <HStack my={4} width="100%"  justifyContent="center"  >
         
          <CopyToClipboard text={code} onCopy={handleCopy}>
                <Button bgColor='lightseagreen'  size="md" >
                  {copied ? 'Copied!' : <Text>Copy Code</Text>}
                </Button>
              </CopyToClipboard>

              <Button bgColor={'tomato'} onClick={handleClear}>
              <Text mx={1} >Clear Code</Text>  
              </Button>    

              </HStack>   
      
        
            
              <DarkMode>
           <Box className="editorContainer"  style={{ height: '80%', overflowY: 'auto', border:'1px solid grey' }} >
          
              
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