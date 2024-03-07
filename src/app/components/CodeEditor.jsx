import { useRef, useState } from "react";
import { Box, Flex, Spacer, HStack, VStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../dictionary/constants";
import Output from "./Output";


const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box mt={4}>
      <VStack p={5} spacing={4}>
       
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="45vh"
            theme="vs-dark"
            w="90vw"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            
          />
        <Spacer/>
        <Box>
        <Output editorRef={editorRef} language={language} />
        </Box>
      </VStack>
    </Box>
  );
};
export default CodeEditor;
