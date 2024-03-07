import { useRef, useState, useEffect } from "react";
import { Box, Flex, Spacer, HStack, VStack, Button, LightMode } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';


const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const language= "javascript"

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

  useEffect(() => {
    setValue(CODE_SNIPPETS[language]);
  }, [language]);

  return (
    <Box mt={4}>

<Flex flexWrap="wrap" justifyContent="space-between">
<Box position="relative" w={{ base: '60%', md: '60%' }} p={5}>
     
       
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="45vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            
          />
          <Box position="absolute" top={10} right={10} zIndex={2}>
            <CopyToClipboard text={value} onCopy={handleCopy}>
            <LightMode>
              <Button size="sm" colorScheme="light">
                {copied ? 'Copied!' : <FontAwesomeIcon icon={faCopy} />}
              </Button>
              </LightMode>
            </CopyToClipboard>
            
          </Box>
          <Box position="absolute" bottom={10} right={10} zIndex={2}>
          <LightMode>
          <Button size="sm"  colorScheme="red" onClick={handleClear}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            </LightMode>
          </Box>
          
         
        </Box>
        <Spacer/>
        <Box w={{ base: '40%', md: '40%' }} p={5}>
        <Output editorRef={editorRef} language={language} />
        
        </Box>
        
        
     </Flex>
    </Box>
  );
};
export default CodeEditor;
