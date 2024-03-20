import React, { useRef, useState, useEffect } from "react";
import { Box, Spacer, Button, LightMode, VStack,Heading, Flex, Text, HStack, Center } from "@chakra-ui/react";
import { snippet } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import Editor from '@monaco-editor/react';
import MyKeyboard from '../keyboards/OnScreenKeyboard'; 
import HorizontalSeparator from "./Seperator.jsx"

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const theme = "vs-dark";

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleKeyboardKeyPress = (key) => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = editor.getSelection();
    const cursorPosition = editor.getPosition();

    if (selection) {
      editor.executeEdits('', [{
        range: selection,
        text: key,
        forceMoveMarkers: true,
      }]);
    } else {
      editor.executeEdits('', [{
        range: {
          startLineNumber: cursorPosition.lineNumber,
          startColumn: cursorPosition.column,
          endLineNumber: cursorPosition.lineNumber,
          endColumn: cursorPosition.column,
        },
        text: key,
        forceMoveMarkers: true,
      }]);
    }
  };

  useEffect(() => {
    setValue(snippet);
  }, [snippet]);



  return (
    <Box id="playground" > 
    <Center>
       <Heading my={10}> Playground </Heading>
    
       </Center>
       <HorizontalSeparator/>
      <Flex mt={5} id="code-editor" width="80vw" mx="10vw" direction={{ base: "column", md: "row", lg: "row" }}  >  
   
      

        <Box width={{ base: "100%", md: "70%", lg: "70%" }} border={2} height="60vh" borderColor="black" position="relative">


    
         <HStack my={2} width="100%"  justifyContent="center"  >
         
          <CopyToClipboard text={value} onCopy={handleCopy}>
                <Button colorScheme="blue"  size="md" >
                  {copied ? 'Copied!' : <Text>Copy</Text>}
                </Button>
              </CopyToClipboard>

              <Button  colorScheme="red" onClick={handleClear}>
              <Text mx={1} >Clear</Text>  <FontAwesomeIcon icon={faTrash} /> 
              </Button>    

              </HStack>   
      
        
            
              
            
              
          <Editor
            id="codeEditor"
            options={{
              minimap: {
                enabled: false,
              },
              suggest: {
                showIcons: false,
                showStatusBar: false,
                maxVisibleSuggestions: -1
              },
              quickSuggestions: false,
              renderValidationDecorations: "off",
              glyphMargin: false
            }}
            height="80%"
            theme={theme}
            language="javascript"
            defaultValue={snippet}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            overflow= "hidden"
          />
         
         
      
          
        </Box>
        <Spacer />
        <Box width={{ base: "100%", md: "30%", lg: "30%" }} p={3}  >
          <Output editorRef={editorRef} language='javascript' />
        </Box>
      </Flex>
      <MyKeyboard onChange={handleKeyboardKeyPress} /> 
    </Box>
  );
};

export default CodeEditor;
