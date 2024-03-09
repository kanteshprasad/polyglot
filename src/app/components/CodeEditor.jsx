
import { useRef, useState, useEffect } from "react";
import { Box, Flex, Spacer, Button, LightMode, } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { snippet } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useColorModeValue } from "@chakra-ui/react";



const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const theme = "vs-dark"


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
    setValue(snippet);
  }, [snippet]);



  return (
    <Box mt={4}>

      <Flex flexWrap="wrap" justifyContent="space-between" height="500px" backgroundColor="black">
        <Box position="relative" w={{ base: '60%', md: '60%' }} p={5} border={2} borderColor="black" >


          <Editor
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

            height="100%"
            theme={theme}
            language="javascript"
            defaultValue={snippet}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}

          />

          <Box position="absolute" top={10} right={10} zIndex={2}>
            <LightMode>
              <CopyToClipboard text={value} onCopy={handleCopy}>
                <Button size="sm" colorScheme="light">
                  {copied ? 'Copied!' : <FontAwesomeIcon icon={faCopy} />}
                </Button>
              </CopyToClipboard>
            </LightMode>

          </Box>
          <Box position="absolute" bottom={10} right={10} zIndex={2}>
            <LightMode>
              <Button size="sm" colorScheme="red" onClick={handleClear}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </LightMode>
          </Box>


        </Box>
        <Spacer />
        <Box w={{ base: '40%', md: '40%' }} p={5}>
          <Output editorRef={editorRef} language='javascript' />

        </Box>


      </Flex>
    </Box>
  );
};
export default CodeEditor;
