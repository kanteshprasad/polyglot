import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Spacer, Button, LightMode } from "@chakra-ui/react";
import { snippet } from "../dictionary/constants";
import Output from "./Output";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import Editor from '@monaco-editor/react';
import MyKeyboard from '../keyboards/OnScreenKeyboard'; // Import the MyKeyboard component

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
    <>
      <Flex id="code-editor" border="0.5px solid white" width="80vw" mx="10vw" flexWrap="wrap" justifyContent="space-around" mt={4} backgroundColor="black" flexDirection={{ base: "column", md: "row" }}>
        <Box width={{ base: "100%", md: "58%" }} ml={{ base: 0, md: "1%" }} p={5} border={2} height="60vh" borderColor="black" position="relative">
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
            height="100%"
            theme={theme}
            language="javascript"
            defaultValue={snippet}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
          <Box position="absolute" top={10} right={10} zIndex={2} >
            <LightMode>
              <CopyToClipboard text={value} onCopy={handleCopy}>
                <Button colorScheme="blue"  size="sm" >
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
        <Box width={{ base: "100%", md: "36%" }} ml={{ base: 0, md: "1%" }} mt={{ base: "1%", md: 0 }} p={5}>
          <Output editorRef={editorRef} language='javascript' />
        </Box>
      </Flex>
      <MyKeyboard onChange={handleKeyboardKeyPress} /> 
    </>
  );
};

export default CodeEditor;
